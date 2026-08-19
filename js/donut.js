// Donut Chart — reusable component
// Usage: Donut.render(svgId, data, options)

var Donut = (function() {

  // Constants
  var INNER_R = 42;
  var OUTER_R = 99;
  var MAX_SCORE = 7;
  var DISC_HEIGHT = (OUTER_R - INNER_R) / MAX_SCORE;

  var DISC_COLORS = [
    'rgba(97,204,186,0.8)',   // 1: teal
    'rgba(97,204,186,0.8)',   // 2: teal
    'rgba(112,172,235,0.8)',  // 3: blue
    'rgba(112,172,235,0.8)',  // 4: blue
    'rgba(245,194,81,0.8)',   // 5: yellow
    'rgba(245,194,81,0.8)',   // 6: yellow
    'rgba(233,119,135,0.8)'   // 7: red
  ];

  var COLOR_HEX = {
    teal: '#61CCBA',
    blue: '#70ACEB',
    yellow: '#F5C251',
    red: '#E97787'
  };

  var LABELS = {
    1: 'Quiet',
    2: 'Murmuring',
    3: 'Present',
    4: 'Calling',
    5: 'Insistent',
    6: 'Urgent',
    7: 'Screaming'
  };

  var radii = [];
  for (var i = 0; i <= MAX_SCORE; i++) radii.push(INNER_R + i * DISC_HEIGHT);

  // SVG helpers
  function pt(r, deg) {
    var rad = deg * Math.PI / 180;
    return (100 + r * Math.cos(rad)).toFixed(1) + ',' + (100 + r * Math.sin(rad)).toFixed(1);
  }

  function wedgePath(ri, ro, a1, a2) {
    return 'M' + pt(ri,a1) + ' L' + pt(ro,a1) + ' A' + ro + ',' + ro + ',0,0,1,' + pt(ro,a2) + ' L' + pt(ri,a2) + ' A' + ri + ',' + ri + ',0,0,0,' + pt(ri,a1) + 'Z';
  }

  function arcPath(r, a1, a2) {
    return 'M' + pt(r,a1) + ' A' + r + ',' + r + ',0,0,1,' + pt(r,a2);
  }

  function colorGroup(score) {
    if (score <= 2) return 'teal';
    if (score <= 4) return 'blue';
    if (score <= 6) return 'yellow';
    return 'red';
  }

  function colorHex(score) {
    return COLOR_HEX[colorGroup(score)];
  }

  function colorLabel(score) {
    return LABELS[score] || '';
  }

  // Create SVG element
  function svgEl(tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    if (attrs) {
      Object.keys(attrs).forEach(function(k) {
        el.setAttribute(k, attrs[k]);
      });
    }
    return el;
  }

  // Render segments into SVG
  // items: [{ name, score, icon?, children? }]
  // options: { onHover(item), onLeave(), onClick(item) }
  function render(svgId, items, options) {
    options = options || {};
    var svg = document.getElementById(svgId);
    if (!svg) return;

    // Keep defs
    var defs = svg.querySelector('defs');
    var defsHTML = defs ? defs.outerHTML : '';
    svg.innerHTML = defsHTML;

    var halfRight = options.halfRight;
    var halfLeft = options.halfLeft;
    var half = halfRight || halfLeft;
    var totalAngle = half ? 180 : 360;
    var startAngle = halfRight ? -90 : halfLeft ? 90 : 0;
    var segAngle = totalAngle / items.length;
    var midAngles = [];

    // Sort by score descending (unless noSort)
    var sorted = options.noSort ? items.slice() : items.slice().sort(function(a, b) { return b.score - a.score; });

    var outline = options.outline;
    var strokeColor = options.strokeColor || 'rgba(255,255,255,0.3)';
    var strokeWidth = options.strokeWidth || '0.5';

    sorted.forEach(function(item, idx) {
      var a1 = startAngle + idx * segAngle;
      var a2 = a1 + segAngle;
      var mid = a1 + segAngle / 2;
      midAngles.push(mid);
      var score = Math.min(item.score, MAX_SCORE);

      var hideThis = options.hideUnscored && score <= 0;
      var g = svgEl('g', {
        'class': 'seg-hover',
        'data-mid': mid,
        'data-name': item.name,
        'data-score': score,
        'data-color': colorGroup(score),
        'data-icon': item.icon || '',
        'style': 'transform-origin:100px 100px;' + (hideThis ? ' display:none;' : '')
      });

      if (outline) {
        // Invisible hit area for the full wedge
        g.appendChild(svgEl('path', {
          'd': wedgePath(INNER_R, OUTER_R, a1, a2),
          'fill': 'transparent',
          'stroke': 'none'
        }));
        // If scored, draw filled colored discs
        if (score > 0 && item.score > 0) {
          for (var d = 0; d < score; d++) {
            g.appendChild(svgEl('path', {
              'd': wedgePath(radii[d], radii[d+1], a1, a2),
              'fill': DISC_COLORS[d]
            }));
          }
          // Ring arcs between filled discs
          for (var d = 1; d < score; d++) {
            g.appendChild(svgEl('path', {
              'd': arcPath(radii[d], a1, a2),
              'fill': 'none',
              'stroke': 'rgba(0,0,0,0.3)',
              'stroke-width': '0.3'
            }));
          }
        }
        // Inner ring arc per segment (for hover hide)
        g.appendChild(svgEl('path', {
          'd': arcPath(INNER_R, a1, a2),
          'class': 'ring-arc',
          'fill': 'none',
          'stroke': 'var(--text-bright)',
          'stroke-width': '1.5',
          'pointer-events': 'none'
        }));
        if (score <= 0) {
          g.appendChild(svgEl('path', {
            'd': arcPath(OUTER_R, a1, a2),
            'class': 'ring-arc',
            'fill': 'none',
            'stroke': strokeColor,
            'stroke-width': strokeWidth
          }));
        }
        // Divider lines on both sides — only for unscored segments
        if (score <= 0) {
          var p1a = pt(INNER_R, a1).split(',');
          var p2a = pt(OUTER_R, a1).split(',');
          g.appendChild(svgEl('line', {
            'x1': p1a[0], 'y1': p1a[1], 'x2': p2a[0], 'y2': p2a[1],
            'stroke': strokeColor, 'stroke-width': strokeWidth
          }));
          var p1b = pt(INNER_R, a2).split(',');
          var p2b = pt(OUTER_R, a2).split(',');
          g.appendChild(svgEl('line', {
            'x1': p1b[0], 'y1': p1b[1], 'x2': p2b[0], 'y2': p2b[1],
            'stroke': strokeColor, 'stroke-width': strokeWidth
          }));
        }
      } else {
        // Draw filled discs up to score
        for (var d = 0; d < score; d++) {
          g.appendChild(svgEl('path', {
            'd': wedgePath(radii[d], radii[d+1], a1, a2),
            'fill': DISC_COLORS[d]
          }));
        }
        // Ring arcs between discs
        for (var d = 1; d < score; d++) {
          g.appendChild(svgEl('path', {
            'd': arcPath(radii[d], a1, a2),
            'fill': 'none',
            'stroke': 'rgba(0,0,0,0.3)',
            'stroke-width': '0.3'
          }));
        }
      }

      svg.appendChild(g);
    });

    // Divider lines (only for non-outline mode; outline puts them in the group)
    if (!outline) {
      for (var i = 0; i <= sorted.length; i++) {
        var angle = startAngle + i * segAngle;
        if (!half && i === sorted.length) break;
        var p1 = pt(INNER_R, angle).split(',');
        var p2 = pt(OUTER_R, angle).split(',');
        svg.appendChild(svgEl('line', {
          'x1': p1[0], 'y1': p1[1],
          'x2': p2[0], 'y2': p2[1],
          'stroke': 'rgba(0,0,0,0.4)',
          'stroke-width': '0.5'
        }));
      }
    }


    // Segment labels with inline icons (outline mode)
    if (outline && options.showLabels) {
      var midR = (INNER_R + OUTER_R) / 2;
      sorted.forEach(function(item, idx) {
        var a1 = startAngle + idx * segAngle;
        var midDeg = a1 + segAngle / 2;
        var score = Math.min(item.score, MAX_SCORE);
        if (options.hideUnscored && score <= 0) return;
        var midRad = midDeg * Math.PI / 180;
        var cx = 100 + midR * Math.cos(midRad);
        var cy = 100 + midR * Math.sin(midRad);
        var rot = midDeg;
        if (midDeg > 90 && midDeg < 270) rot += 180;

        // Wrapper group: position + rotate
        var labelG = svgEl('g', {
          'class': 'seg-label',
          'data-name': item.name,
          'transform': 'translate(' + cx.toFixed(1) + ',' + cy.toFixed(1) + ') rotate(' + rot + ')',
          'pointer-events': 'none',
          'style': 'transition: opacity 0.4s ease-out;'
        });

        // Render text first to measure, then position icon+text pair
        var fontSize = 5;
        var iconSize = 5;
        var gap = 1.5;
        var flipped = midDeg > 90 && midDeg < 270;

        // Split name on " & " for multiline
        var lines = item.name.indexOf(' & ') >= 0
          ? item.name.split(' & ').map(function(s, i) { return i > 0 ? '& ' + s.trim() : s.trim(); })
          : [item.name];
        var lineHeight = fontSize + 1.5;
        var yOffset = -(lines.length - 1) * lineHeight / 2;

        var text = svgEl('text', {
          'x': '0', 'y': '0',
          'text-anchor': 'start',
          'dominant-baseline': 'central',
          'font-size': fontSize,
          'font-weight': '400',
          'fill': 'rgba(255,255,255,0.5)'
        });

        // Use first line for measurement
        text.textContent = lines[0];
        labelG.appendChild(text);
        svg.appendChild(labelG);

        // Measure widest line
        var tw = text.getComputedTextLength();
        text.textContent = '';
        for (var li = 0; li < lines.length; li++) {
          var tspan = svgEl('tspan', {
            'x': '0',
            'dy': li === 0 ? yOffset.toFixed(1) : lineHeight.toFixed(1),
            'text-anchor': 'start'
          });
          tspan.textContent = lines[li];
          text.appendChild(tspan);
        }
        // Re-measure widest
        var maxTw = 0;
        text.querySelectorAll('tspan').forEach(function(ts) {
          var len = ts.getComputedTextLength();
          if (len > maxTw) maxTw = len;
        });
        tw = maxTw;

        var totalWidth = (item.icon ? iconSize + gap : 0) + tw;
        var startX = -totalWidth / 2;

        if (flipped) {
          // Text first, icon after (icon closer to inner circle)
          text.querySelectorAll('tspan').forEach(function(ts) { ts.setAttribute('x', startX.toFixed(1)); });
          if (item.icon) {
            var iconX = startX + tw + gap;
            var iconG = svgEl('g', {
              'transform': 'translate(' + iconX.toFixed(1) + ',' + (-iconSize/2).toFixed(1) + ') scale(' + (iconSize/24).toFixed(3) + ')'
            });
            var iconWrap = svgEl('g', {
              'fill': 'none', 'stroke': 'rgba(255,255,255,0.8)',
              'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
            });
            iconWrap.innerHTML = item.icon;
            iconG.appendChild(iconWrap);
            labelG.appendChild(iconG);
          }
        } else {
          // Icon first, then text (icon closer to inner circle)
          var textX = startX + (item.icon ? iconSize + gap : 0);
          text.querySelectorAll('tspan').forEach(function(ts) { ts.setAttribute('x', textX.toFixed(1)); });
          if (item.icon) {
            var iconG = svgEl('g', {
              'transform': 'translate(' + startX.toFixed(1) + ',' + (-iconSize/2).toFixed(1) + ') scale(' + (iconSize/24).toFixed(3) + ')'
            });
            var iconWrap = svgEl('g', {
              'fill': 'none', 'stroke': 'rgba(255,255,255,0.8)',
              'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
            });
            iconWrap.innerHTML = item.icon;
            iconG.appendChild(iconWrap);
            labelG.appendChild(iconG);
          }
        }
      });
    }

    // Bind hover
    if (options.noHover) return sorted;
    svg.querySelectorAll('.seg-hover').forEach(function(g) {
      g.addEventListener('mouseenter', function() {
        // Dim all other segments and labels
        svg.querySelectorAll('.seg-hover').forEach(function(s) {
          if (s !== g) s.style.opacity = '0.3';
        });
        svg.querySelectorAll('.seg-label').forEach(function(l) {
          if (l.dataset.name !== g.dataset.name) l.style.opacity = '0.3';
        });
        var label = svg.querySelector('.seg-label[data-name="' + g.dataset.name + '"]');
        if (label) {
          label.style.opacity = '1';
          label.querySelectorAll('text').forEach(function(t) { t.setAttribute('fill', 'rgba(255,255,255,1)'); });
          label.querySelectorAll('g[fill="none"]').forEach(function(ic) { ic.setAttribute('stroke', 'rgba(255,255,255,1)'); });
        }
        g.querySelectorAll('.ring-arc').forEach(function(arc) { arc.style.opacity = '0'; });
        if (options.onHover) {
          options.onHover({
            name: g.dataset.name,
            score: parseInt(g.dataset.score),
            color: g.dataset.color,
            colorHex: COLOR_HEX[g.dataset.color],
            label: LABELS[parseInt(g.dataset.score)] || '',
            icon: g.dataset.icon
          });
        }
      });
      g.addEventListener('mouseleave', function() {
        // Restore all segments and labels
        svg.querySelectorAll('.seg-hover').forEach(function(s) { s.style.opacity = ''; });
        svg.querySelectorAll('.seg-label').forEach(function(l) { l.style.opacity = ''; });
        var label = svg.querySelector('.seg-label[data-name="' + g.dataset.name + '"]');
        if (label) {
          label.querySelectorAll('text').forEach(function(t) { t.setAttribute('fill', 'rgba(255,255,255,0.5)'); });
          label.querySelectorAll('g[fill="none"]').forEach(function(ic) { ic.setAttribute('stroke', 'rgba(255,255,255,0.8)'); });
        }
        g.querySelectorAll('.ring-arc').forEach(function(arc) { arc.style.opacity = ''; });
        if (options.onLeave) options.onLeave();
      });
      g.addEventListener('click', function() {
        if (options.onClick) {
          var item = sorted.find(function(s) { return s.name === g.dataset.name; });
          options.onClick(item);
        }
      });
    });

    return sorted;
  }

  // Randomize scores for items
  function randomize(items) {
    items.forEach(function(item) {
      item.score = Math.floor(Math.random() * MAX_SCORE) + 1;
      if (item.children) {
        item.childScores = item.children.map(function() {
          return Math.floor(Math.random() * MAX_SCORE) + 1;
        });
      }
    });
  }

  // Public API
  return {
    render: render,
    randomize: randomize,
    colorGroup: colorGroup,
    colorHex: colorHex,
    colorLabel: colorLabel,
    COLOR_HEX: COLOR_HEX,
    LABELS: LABELS,
    MAX_SCORE: MAX_SCORE
  };

})();

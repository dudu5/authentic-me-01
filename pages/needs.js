// ────────────────────────────────────────
// Needs Mapping Test Page
// ────────────────────────────────────────

function renderNeeds(container) {
  var questions = [
    { id: 1, child: 'Sleep & restoration', parent: 'Rest & Recovery', statements: ['I\'m tired in a way that sleep isn\'t fixing.', 'Getting up takes something out of me.', 'I\'m running on caffeine, momentum, or willpower.'] },
    { id: 2, child: 'Understanding & learning', parent: 'Cognitive & Intellectual', statements: ['There\'s something I want to actually understand, not just know about.', 'I read or watch a lot and remember almost none of it.', 'My mind feels underused.'] },
    { id: 3, child: 'Belonging & acceptance', parent: 'Social Connection', statements: ['I\'m around people and still feel slightly outside.', 'I\'d have to think about who to tell if something good happened.', 'I want somewhere I don\'t have to earn my place each time.'] },
    { id: 4, child: 'Boundary setting', parent: 'Autonomy & Freedom', statements: ['I say yes and regret it later.', 'There\'s something I want to stop doing and haven\'t said so.', 'I let things go on past the point I wanted them to end.'] },
    { id: 5, child: 'Self-worth & respect', parent: 'Identity & Esteem', statements: ['I\'m harder on myself than I\'d be on anyone else.', 'Good things happen and I don\'t quite feel they count.', 'There\'s a voice in my head that isn\'t kind.'] },
    { id: 6, child: 'Physical health & energy', parent: 'Health & Vitality', statements: ['My body wants to move and I keep not letting it.', 'I run out of energy before the day does.', 'Something physical needs attention and I\'m putting it off.'] },
    { id: 7, child: 'Financial security', parent: 'Safety & Security', statements: ['Money is in the back of my mind most days.', 'A bad month would actually be a problem.', 'I want to stop calculating before I decide things.'] },
    { id: 8, child: 'Mastery & competence', parent: 'Meaning', statements: ['I\'m not getting better at the thing I do.', 'I\'m good enough at a lot and excellent at nothing.', 'I want something harder than what I\'m doing.'] },
    { id: 9, child: 'Relaxation & downtime', parent: 'Rest & Recovery', statements: ['I can\'t settle even when there\'s nothing to do.', 'My time off doesn\'t feel like time off.', 'I\'m always half-doing something.'] },
    { id: 10, child: 'Affection & intimacy', parent: 'Social Connection', statements: ['I want to be close to someone and I\'m not.', 'I miss being touched.', 'There\'s a person I want more with.'] },
    { id: 11, child: 'Self-determination', parent: 'Autonomy & Freedom', statements: ['My days are shaped by other people\'s decisions.', 'I\'m doing what makes sense rather than what I want.', 'I want one thing that\'s mine to decide.'] },
    { id: 12, child: 'Creativity & problem-solving', parent: 'Cognitive & Intellectual', statements: ['I want to make something, not just consume.', 'I have ideas that never get out of my head.', 'I\'m repeating solutions instead of finding new ones.'] },
    { id: 13, child: 'Emotional stability', parent: 'Safety & Security', statements: ['I check someone\'s mood before I know my own.', 'I brace before certain conversations.', 'I want one relationship where I don\'t have to guess.'] },
    { id: 14, child: 'Contribution & impact', parent: 'Meaning', statements: ['What I do doesn\'t seem to land anywhere.', 'I want my work to matter to someone.', 'I have something to give that I\'m not giving.'] },
    { id: 15, child: 'Empathy & space', parent: 'Social Connection', statements: ['I listen more than I\'m listened to.', 'I want someone to ask and actually wait for the answer.', 'I take up less room than I want to.'] },
    { id: 16, child: 'Play & joy', parent: 'Rest & Recovery', statements: ['I can\'t remember the last time I did something just because it was fun.', 'Everything I enjoy has turned into a project.', 'I want to mess around with no point to it.'] },
    { id: 17, child: 'Recognition & status', parent: 'Identity & Esteem', statements: ['I want someone to notice what I\'ve been doing.', 'I feel invisible in a room I\'m actually in.', 'I want credit and feel awkward about wanting it.'] },
    { id: 18, child: 'Sexual expression', parent: 'Health & Vitality', statements: ['I want more than I\'m having.', 'Desire is either louder than usual or oddly absent.', 'There\'s something here I don\'t talk about with anyone.'] },
    { id: 19, child: 'Privacy & space', parent: 'Autonomy & Freedom', statements: ['I want hours that nobody has a claim on.', 'I\'m rarely fully alone, even alone.', 'I want to close a door.'] },
    { id: 20, child: 'Self-actualization', parent: 'Meaning', statements: ['I\'m not growing and I\'ve noticed.', 'There\'s a version of me I keep almost starting.', 'I want the next thing and can\'t name it.'] },
    { id: 21, child: 'Physical safety', parent: 'Safety & Security', statements: ['I don\'t fully relax where I live.', 'My body stays alert when it shouldn\'t need to.', 'Something about my situation doesn\'t feel safe.'] },
    { id: 22, child: 'Transcendence', parent: 'Meaning', statements: ['I want to feel part of something bigger than my own life.', 'I\'ve stopped having moments that put things in scale.', 'There\'s a question I keep not opening.'] }
  ];

  var SCORE_COLORS = [
    '#61CCBA', '#61CCBA',
    '#70ACEB', '#70ACEB',
    '#F5C251', '#F5C251',
    '#E97787'
  ];

  var parentDefs = [
    { name: 'Cognitive & Intellectual', icon: '<path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7zM9 21h6"/>' },
    { name: 'Rest & Recovery', icon: '<path d="M3 11h1M6.3 6.3l.7.7M12 3v1M17.7 6.3l-.7.7M21 11h-1"/><path d="M5 17h14M7 21h10"/><path d="M12 11a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z"/>' },
    { name: 'Identity & Esteem', icon: '<circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>' },
    { name: 'Social Connection', icon: '<path d="M16 21v-2a4 4 0 0 0-3-3.87M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/><circle cx="16" cy="4" r="2.5"/>' },
    { name: 'Safety & Security', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
    { name: 'Autonomy & Freedom', icon: '<path d="M5 12h14M12 5l7 7-7 7"/>' },
    { name: 'Health & Vitality', icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>' },
    { name: 'Meaning', icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>' }
  ];

  var parentChildren = {};
  questions.forEach(function(q) {
    if (!parentChildren[q.parent]) parentChildren[q.parent] = [];
    parentChildren[q.parent].push(q.id);
  });

  var answers = {};

  // Build layout
  container.innerHTML = '';
  container.style.display = 'flex';
  container.style.flexDirection = 'row';

  // Left column - questions
  var leftCol = document.createElement('div');
  leftCol.className = 'needs-col-left';
  leftCol.innerHTML = '<h1 class="needs-title">Quick Mapping</h1><div id="needsQuestionList" class="needs-question-list"></div>';
  container.appendChild(leftCol);

  // Right column - donut
  var rightCol = document.createElement('div');
  rightCol.className = 'needs-col-right';
  rightCol.innerHTML = '<div class="needs-donut-wrap">' +
    '<svg id="needsDonut" viewBox="-10 -10 220 220" style="width:100%; max-width:500px; display:none;"></svg>' +
    '<div class="needs-center-label" id="needsCenterLabel"><span style="color:#E97787;">No</span> Signal.</div>' +
    '</div>' +
    '<div style="text-align:center; margin-top:20px;">' +
    '<span id="needsRandomize" style="font-size:12px; color:var(--text-subtle); cursor:pointer; text-decoration:underline; text-underline-offset:3px;">randomize</span>' +
    '</div>';
  container.appendChild(rightCol);

  // Wire up randomize
  document.getElementById('needsRandomize').addEventListener('click', function() {
    var quickScores = [1, 3, 5, 7];
    questions.forEach(function(q) {
      var score = quickScores[Math.floor(Math.random() * quickScores.length)];
      selectQuestionScore(q.id, score);
    });
  });

  // Render questions
  var questionList = document.getElementById('needsQuestionList');
  questions.forEach(function(q) {
    var div = document.createElement('div');
    div.className = 'needs-question';
    div.id = 'needs-q-' + q.id;

    var html = '<div class="needs-q-prompt">Do any of these land?</div>';
    q.statements.forEach(function(s) {
      html += '<div class="needs-q-statement">' + s + '</div>';
    });
    html += '<div class="needs-score-slider" style="margin-top:16px;"><div class="needs-score-slider-track" id="needs-track-' + q.id + '"></div></div>';

    div.innerHTML = html;
    questionList.appendChild(div);
    buildQuestionSlider(q.id);
  });

  function buildQuestionSlider(qId) {
    var track = document.getElementById('needs-track-' + qId);
    var tapLabels = { 1: 'not really', 3: 'some', 5: 'many', 7: 'all of it' };
    var quickScores = [1, 3, 5, 7];

    quickScores.forEach(function(score, idx) {
      if (idx > 0) {
        var conn = document.createElement('div');
        conn.className = 'needs-score-connector';
        conn.style.width = '48px';
        track.appendChild(conn);
      }
      var dot = document.createElement('div');
      dot.className = 'needs-score-dot';
      dot.dataset.score = score;
      dot.dataset.qid = qId;
      dot.style.borderColor = 'rgba(255,255,255,0.3)';
      dot.style.color = 'rgba(255,255,255,0.5)';
      var lbl = document.createElement('div');
      lbl.className = 'needs-score-dot-label';
      lbl.textContent = tapLabels[score];
      dot.appendChild(lbl);
      dot.addEventListener('click', function() {
        selectQuestionScore(qId, score);
      });
      lbl.addEventListener('click', function(e) {
        e.stopPropagation();
        selectQuestionScore(qId, score);
      });
      track.appendChild(dot);
    });
  }

  function selectQuestionScore(qId, score) {
    answers[qId] = score;
    var qEl = document.getElementById('needs-q-' + qId);
    if (qEl) qEl.classList.add('answered');
    var track = document.getElementById('needs-track-' + qId);
    track.querySelectorAll('.needs-score-dot').forEach(function(d) {
      var s = parseInt(d.dataset.score);
      if (s === score) {
        d.classList.add('active');
      } else {
        d.classList.remove('active');
      }
    });
    updateMap();
  }

  function getParentScores() {
    return parentDefs.map(function(p) {
      var childIds = parentChildren[p.name] || [];
      var answered = [];
      childIds.forEach(function(id) {
        if (answers[id]) answered.push(answers[id]);
      });
      if (answered.length === 0) return { name: p.name, score: 0, icon: p.icon };
      var max = Math.max.apply(null, answered);
      if (answered.length === 1) return { name: p.name, score: max, icon: p.icon };
      var others = answered.filter(function(v, i) { return i !== answered.indexOf(max); });
      var meanOthers = others.reduce(function(a, b) { return a + b; }, 0) / others.length;
      var parentScore = Math.floor(max - 0.3 * (max - meanOthers));
      return { name: p.name, score: Math.max(1, parentScore), icon: p.icon };
    });
  }

  function updateMap() {
    var parents = getParentScores();
    var svg = document.getElementById('needsDonut');
    var defs = svg.querySelector('defs');
    var defsHTML = defs ? defs.outerHTML : '';
    svg.innerHTML = defsHTML;

    var answeredCount = Object.keys(answers).length;
    var totalCount = questions.length;
    var centerLabel = document.getElementById('needsCenterLabel');
    svg.style.display = answeredCount > 0 ? '' : 'none';

    if (answeredCount > 0) {
      var pct = Math.round((answeredCount / totalCount) * 100);
      var pctColor;
      if (pct >= 100) pctColor = '#61CCBA';
      else if (pct >= 66) pctColor = '#70ACEB';
      else if (pct >= 33) pctColor = '#F5C251';
      else pctColor = '#E97787';
      var baseHtml = '<span style="color:' + pctColor + ';">' + pct + '%</span><br><span style="font-size:14px; color:var(--text-subtle);">signal strength</span>';
      if (pct >= 100) {
        centerLabel.innerHTML = baseHtml + '<br><span style="font-size:14px; color:var(--text-visible);">click to complete</span>';
        centerLabel.style.cursor = 'pointer';
        centerLabel.style.width = '160px';
        centerLabel.style.height = '160px';
        centerLabel.style.borderRadius = '50%';
        centerLabel.style.display = 'flex';
        centerLabel.style.flexDirection = 'column';
        centerLabel.style.alignItems = 'center';
        centerLabel.style.justifyContent = 'center';
        centerLabel.style.pointerEvents = 'auto';
        centerLabel.style.lineHeight = '0.9';
        centerLabel.onclick = completeMap;
      } else {
        centerLabel.innerHTML = baseHtml;
        centerLabel.style.cursor = '';
        centerLabel.style.width = '';
        centerLabel.style.height = '';
        centerLabel.style.borderRadius = '';
        centerLabel.style.display = '';
        centerLabel.style.pointerEvents = '';
        centerLabel.style.lineHeight = '0.9';
        centerLabel.onclick = null;
      }
    } else {
      centerLabel.innerHTML = '<span style="color:#E97787;">No</span> Signal.';
      centerLabel.style.color = '';
    }

    var INNER_R = 42;
    var OUTER_R = 99;
    var MAX_SCORE = 7;
    var DISC_HEIGHT = (OUTER_R - INNER_R) / MAX_SCORE;
    var radii = [];
    for (var i = 0; i <= MAX_SCORE; i++) radii.push(INNER_R + i * DISC_HEIGHT);

    var segAngle = 360 / parents.length;

    // Inner circle
    var circleEl = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleEl.setAttribute('cx', '100');
    circleEl.setAttribute('cy', '100');
    circleEl.setAttribute('r', INNER_R);
    circleEl.setAttribute('fill', 'none');
    circleEl.setAttribute('stroke', answeredCount >= totalCount ? '#61CCBA' : 'rgba(255,255,255,0.3)');
    circleEl.setAttribute('stroke-width', '1.5');
    circleEl.setAttribute('pointer-events', 'none');
    svg.appendChild(circleEl);

    if (answeredCount === 0) return;

    function pt(r, deg) {
      var rad = deg * Math.PI / 180;
      return (100 + r * Math.cos(rad)).toFixed(1) + ',' + (100 + r * Math.sin(rad)).toFixed(1);
    }

    function arcPath(r, a1, a2) {
      return 'M' + pt(r, a1) + ' A' + r + ',' + r + ',0,0,1,' + pt(r, a2);
    }

    function wedgePath(ri, ro, a1, a2) {
      return 'M' + pt(ri, a1) + ' L' + pt(ro, a1) + ' A' + ro + ',' + ro + ',0,0,1,' + pt(ro, a2) + ' L' + pt(ri, a2) + ' A' + ri + ',' + ri + ',0,0,0,' + pt(ri, a1) + 'Z';
    }

    function svgEl(tag, attrs) {
      var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
      if (attrs) Object.keys(attrs).forEach(function(k) { el.setAttribute(k, attrs[k]); });
      return el;
    }

    parents.forEach(function(item, idx) {
      var a1 = idx * segAngle;
      var a2 = a1 + segAngle;
      var score = Math.min(item.score, MAX_SCORE);

      var g = svgEl('g', { 'style': 'transform-origin:100px 100px;' });

      // Hit area
      g.appendChild(svgEl('path', { 'd': wedgePath(INNER_R, OUTER_R, a1, a2), 'fill': 'transparent', 'stroke': 'none' }));

      // White filled discs for scored parents
      if (score > 0) {
        for (var d = 0; d < score; d++) {
          g.appendChild(svgEl('path', {
            'd': wedgePath(radii[d], radii[d + 1], a1, a2),
            'fill': 'rgba(255,255,255,0.15)'
          }));
        }
        // Ring arcs between discs
        for (var d = 1; d < score; d++) {
          g.appendChild(svgEl('path', {
            'd': arcPath(radii[d], a1, a2),
            'fill': 'none', 'stroke': 'rgba(255,255,255,0.1)', 'stroke-width': '0.3'
          }));
        }
      }

      svg.appendChild(g);
    });
  }

  function completeMap() {
    var scores = {};
    parentDefs.forEach(function(p) {
      var childIds = parentChildren[p.name] || [];
      var children = {};
      childIds.forEach(function(id) {
        var q = questions.find(function(qq) { return qq.id === id; });
        if (q && answers[id]) {
          children[q.child] = answers[id];
        }
      });
      var parentScore = getParentScores().find(function(ps) { return ps.name === p.name; });
      scores[p.name] = {
        score: parentScore ? parentScore.score : null,
        children: children
      };
    });
    localStorage.setItem('am_scores', JSON.stringify(scores));
  }

  // Initial render
  updateMap();

  // Reset container style on cleanup
  container._needsCleanup = function() {
    container.style.display = '';
    container.style.flexDirection = '';
  };
}

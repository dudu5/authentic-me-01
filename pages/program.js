function renderProgram(container) {
  container.innerHTML =
  '<div id="programHero">' +
    '<div class="hero-section">' +
      '<h1 class="hero-primary">You are the only<br class="mobile-br"> person you will<br><span style="color:var(--color-teal);">never</span><br class="mobile-br"> stop living with</h1>' +
      '<p class="hero-secondary">Most of what you do every day runs on autopilot.<br class="desktop-br"> Without a map of yourself, you stay lost even when<br class="desktop-br"> everything looks fine from the outside.</p>' +
      '<p class="hero-supporting">Quiet restlessness or emptiness on the inside.<br class="desktop-br"> High performance on the outside.<br class="desktop-br"> That gap is not a personal failing.<br class="desktop-br"> It is a missing map.</p>' +
      '<div class="scroll-arrow" onclick="document.getElementById(\'s-what\').scrollIntoView({behavior:\'smooth\'})">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>' +
      '</div>' +
    '</div>' +
  '</div>' +
  '<div class="program-scroll">' +

  // What this actually is — leads the page
  '<div id="s-what" class="section-2 program-anchor" style="padding-top:120px;">' +
    '<div class="section-label">What this actually is</div>' +
    '<h2 class="section-heading">There are two games running in your life.</h2>' +
    '<p class="section-intro">The outer one you were trained for. The inner one nobody ever taught you.</p>' +
    '<div class="comparison">' +
      '<div class="comparison-col">' +
        '<div class="comparison-title">The <span style="color:var(--color-red);">outer</span> game</div>' +
        '<div class="comparison-body">' +
          '<div class="arrow-bullet"><span style="color:var(--color-red);">→</span> <span>What to aim at</span></div>' +
          '<div class="arrow-bullet"><span style="color:var(--color-red);">→</span> <span>What counts as winning</span></div>' +
          '<div class="arrow-bullet"><span style="color:var(--color-red);">→</span> <span>How you know if you\'re doing well</span></div>' +
          '<div class="arrow-bullet"><span style="color:var(--color-red);">→</span> <span>Years of school, feedback, and people shaping you</span></div>' +
          '<div class="arrow-bullet"><span style="color:var(--color-red);">→</span> <span>Rules on what is "right" and accepted</span></div>' +
          '<p style="opacity:0.5; margin-top:24px;">It has scoreboards and other people you can check yourself against.</p>' +
        '</div>' +
      '</div>' +
      '<div class="comparison-col">' +
        '<div class="comparison-title">The <span style="color:var(--color-teal);">inner</span> game</div>' +
        '<div class="comparison-body">' +
          '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Reading your own signal</span></div>' +
          '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Knowing what you actually need</span></div>' +
          '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Not just what you were taught to chase</span></div>' +
          '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Noticing how you automatically react</span></div>' +
          '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Spotting the old strategies still running the show</span></div>' +
          '<p style="opacity:0.5; margin-top:24px;">No scoreboards. Just you trying to hear what\'s true underneath all the noise.</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="program-divider"></div>' +
    '<h3 class="sub-heading">The real game is the <span style="color:var(--color-teal);">relationship</span> between them.</h3>' +
    '<div class="body-text">' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>It\'s not about choosing the inner game over the outer one.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>It\'s about whether what you\'re doing out there is actually connected to what\'s true in here.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>When those line up, everything runs — energy moves through you instead of getting spent on the gap.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>When they don\'t, you can do everything right and still feel like you\'re pushing something uphill.</span></div>' +
    '</div>' +
  '</div>' +

  // Playing both games
  '<div id="s-both" class="section-2 program-anchor" style="padding-bottom:0;">' +
    '<div class="section-label">Playing both games</div>' +
    '<h2 class="section-heading">How this actually works</h2>' +

    '<h3 class="sub-heading">Externalise it</h3>' +
    '<div class="body-text">' +
      '<p>The moment you put "where I am" and "where I\'m aiming" into words, you can see it.</p>' +
      '<p>Articulation is mapping. Until it\'s outside you, the mind keeps swimming in it.</p>' +
    '</div>' +
    '<img src="Images/2_coordinates.png" alt="Coordinates" style="width:100%; max-width:760px; opacity:0.88; margin-top:24px;">' +
    '<div class="body-text" style="margin-top:24px;">' +
      '<p>The first version will be rough. That\'s normal. The resolution starts low.</p>' +
      '<p>If you don\'t know — that\'s okay. Not knowing is also a position.</p>' +
      '<p>You come back, refine it, and the picture gets clearer over time — like shaping a sculpture, or mapping terrain you\'ve actually walked.</p>' +
    '</div>' +

    '<img src="Images/The_spiral.png" alt="The spiral" style="width:100%; max-width:760px; opacity:0.88; margin:8px 0 24px;">' +
    '<p class="emphasis-text">Repeat.</p>' +

    '<h3 class="sub-heading">Needs vs Wants</h3>' +
    '<div class="body-text">' +
      '<p>The real game is keeping what you do out there connected to what\'s actually going on inside you.</p>' +
      '<p>Needs are the signal. Wants are the strategies we build on top of them.</p>' +
      '<p>Most of us are carrying a lot of old strategies — built years ago, often without ever checking the actual signal.</p>' +
    '</div>' +
    '<img src="Images/Ground4_Needs_Wants.png" alt="Needs and Wants" style="width:100%; max-width:760px; opacity:0.88; margin:0 0 8px; clip-path:inset(15% 0 0 0); margin-top:-40px;">' +
    '<div class="body-text">' +
      '<p>So we run on autopilot.</p>' +
      '<p>We chase more money, more success, more freedom… while the real need underneath stays unmet.</p>' +
      '<p>When you only know your wants, you\'re mostly playing the outer game.</p>' +
      '<p>When you start seeing the needs, you can finally check whether the two games are connected.</p>' +
    '</div>' +

  '</div>' +

  // Start right now (split with donut)
  '<div class="split-section program-anchor" style="padding:0;">' +
    '<div class="split-left">' +
      '<h3 class="sub-heading" style="margin-top:0;">Start right now</h3>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Free</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>3–5 minutes</span></div>' +
      '<div style="height:12px;"></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>22 short statements</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>See which needs are calling for your attention</span></div>' +
      '<div style="height:12px;"></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>No email. No sign-up. No bullshit.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Your data stays yours. We don\'t store it.</span></div>' +
      '<a href="#/needs" style="display:inline-block; margin-top:24px; padding:12px 32px; border:1px solid var(--color-teal); border-radius:999px; font-size:16px; font-weight:400; color:var(--color-teal); text-decoration:none; cursor:pointer; transition:all 0.3s ease-out;">Start Mapping</a>' +
    '</div>' +
    '<div class="split-right">' +
      '<div class="donut-preview">' +
        '<svg id="startDonut" viewBox="-10 -10 220 220" width="100%" height="100%"></svg>' +
        '<div class="donut-center-btn" style="cursor:default;">Needs<br>Signal</div>' +
      '</div>' +
    '</div>' +
  '</div>' +

  // Don't do it alone (new section)
  '<div class="section-2 program-anchor" style="padding-top:5px;">' +

    '<h3 class="sub-heading" style="margin-top:0;"><span style="color:var(--color-red);">Don\'t</span> do it alone</h3>' +
    '<div class="body-text">' +
      '<p>Doing this by yourself is possible, but slow and fragile.</p>' +
      '<p>Having other men in it with you changes the game:</p>' +
    '</div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>It\'s harder to cheat when you\'re actually seen</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Being witnessed changes how the hard things feel</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Blind spots become visible</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>You get perspectives and experience you can\'t give yourself</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>The struggle becomes normal instead of something wrong with you</span></div>' +

  '</div>' +


  // Ten mornings
  '<div id="s-program" class="section-2 program-anchor">' +
    '<div class="section-label">The program</div>' +
    '<h2 class="section-heading" style="margin-bottom:12px;">Ten mornings.</h2>' +
    '<div class="body-text" style="opacity:0.7; font-size:18px;">5:30 AM · Weekdays · Two weeks · Eight people</div>' +
    '<div class="body-text"><p>You get up before the rest of your life starts. Ninety minutes total, and you\'re done by seven.</p></div>' +
    '<div class="body-text"><p>Every morning follows the same shape.</p></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Twenty minutes of movement.</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Where are you right now.</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>What are you aiming at.</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>What did you actually learn since yesterday.</span></div>' +
    '<div class="body-text" style="margin-top:24px;"><p>That\'s it. Ten times.</p></div>' +
    '<div class="body-text"><p>Two weeks doesn\'t change anything essential in you. We\'re not going to claim it does.</p></div>' +
    '<div class="body-text"><p>What it does is hand you:</p></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>The tool and get you started</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Practice at the part that\'s hard alone</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Coming back to it</span></div>' +
    '<div class="body-text"><p>You leave knowing how to locate yourself, and with ten days of evidence that you can keep doing it.</p></div>' +
  '</div>' +

  // What ten mornings gives you
  '<div id="s-gives" class="section-2 program-anchor">' +
    '<div class="section-label">What it brings</div>' +
    '<h2 class="section-heading">What ten mornings gives you</h2>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>The ground the game is played on</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>The main moves</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>Ten consecutive days of practice alongside other men</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>A clear way to locate yourself</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>Evidence that you can keep coming back to it</span></div>' +
    '<div style="height:16px;"></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>The habit of checking your position — instead of letting autopilot run the show</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>A simple daily structure that doesn\'t rely on willpower</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>Practice speaking what\'s actually true out loud</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>Real-time feedback from other men who are in the same work</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>A small group that sees you doing the work, not just the results</span></div>' +
    '<div class="comparison-title" style="margin-top:32px;">From the daily movement</div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>Wakes the body before the mind takes over</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>Gets energy moving instead of starting from stuck</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>Helps you notice where you\'re actually at</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>Builds the habit of showing up even when motivation is low</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>Creates a clear start to the morning</span></div>' +
    '<div class="arrow-bullet"><span style="color:var(--color-teal);">✓</span> <span>Lets you meet your own edge without turning it into a performance</span></div>' +
  '</div>' +

  // What we actually do
  '<div id="s-do" class="program-anchor" style="max-width:1120px; padding:120px 0 32px;">' +
    '<div class="section-label">What we actually do</div>' +
    '<h2 class="section-heading">The shape of a morning</h2>' +
    '<div class="body-text" style="opacity:0.6; margin-bottom:32px;">90 minutes · 5:30–7:00 · Monday–Friday · Held in a small group of men doing the same work.</div>' +

    // Desktop timeline
    '<div class="timeline-bar">' +
      '<div class="timeline-segment" style="flex:20;">' +
        '<div class="timeline-time">5:30</div>' +
        '<div class="timeline-color" style="background:#E97787;"></div>' +
        '<div class="timeline-label">Movement</div>' +
        '<div class="timeline-duration">20 min</div>' +
      '</div>' +
      '<div class="timeline-segment" style="flex:15;">' +
        '<div class="timeline-time">5:50</div>' +
        '<div class="timeline-color" style="background:#61CCBA;"></div>' +
        '<div class="timeline-label">Attention</div>' +
        '<div class="timeline-duration">15 min</div>' +
      '</div>' +
      '<div class="timeline-segment" style="flex:30;">' +
        '<div class="timeline-time">6:05</div>' +
        '<div class="timeline-color" style="background:#F5C251;"></div>' +
        '<div class="timeline-label">Perspective</div>' +
        '<div class="timeline-duration">30 min</div>' +
      '</div>' +
      '<div class="timeline-segment" style="flex:15;">' +
        '<div class="timeline-time">6:35</div>' +
        '<div class="timeline-color" style="background:#70ACEB;"></div>' +
        '<div class="timeline-label">Own work</div>' +
        '<div class="timeline-duration">15 min</div>' +
      '</div>' +
      '<div class="timeline-segment" style="flex:10;">' +
        '<div class="timeline-time">6:50</div>' +
        '<div class="timeline-color" style="background:#61CCBA;"></div>' +
        '<div class="timeline-label">Attention</div>' +
        '<div class="timeline-duration">10 min</div>' +
      '</div>' +
      '<div class="timeline-segment" style="flex:0; align-items:flex-end;">' +
        '<div class="timeline-time">7:00</div>' +
        '<div style="height:6px;"></div>' +
        '<div class="timeline-label"></div>' +
      '</div>' +
    '</div>' +

    // Mobile timeline
    '<div class="timeline-mobile">' +
      '<div class="timeline-mobile-row"><div class="timeline-mobile-bar" style="background:#E97787;"></div><div class="timeline-mobile-info"><div class="timeline-mobile-label">Movement</div><div class="timeline-mobile-time">5:30 – 5:50 · 20 min</div></div></div>' +
      '<div class="timeline-mobile-row"><div class="timeline-mobile-bar" style="background:#61CCBA;"></div><div class="timeline-mobile-info"><div class="timeline-mobile-label">Attention</div><div class="timeline-mobile-time">5:50 – 6:05 · 15 min</div></div></div>' +
      '<div class="timeline-mobile-row"><div class="timeline-mobile-bar" style="background:#F5C251;"></div><div class="timeline-mobile-info"><div class="timeline-mobile-label">Perspective</div><div class="timeline-mobile-time">6:05 – 6:35 · 30 min</div></div></div>' +
      '<div class="timeline-mobile-row"><div class="timeline-mobile-bar" style="background:#70ACEB;"></div><div class="timeline-mobile-info"><div class="timeline-mobile-label">Own work</div><div class="timeline-mobile-time">6:35 – 6:50 · 15 min</div></div></div>' +
      '<div class="timeline-mobile-row"><div class="timeline-mobile-bar" style="background:#61CCBA;"></div><div class="timeline-mobile-info"><div class="timeline-mobile-label">Attention</div><div class="timeline-mobile-time">6:50 – 7:00 · 10 min</div></div></div>' +
    '</div>' +


    // Practice cards
    '<div class="practice-cards">' +
      '<div class="practice-card" data-explore="movement" onclick="toggleExplore(\'movement\')">' +
        '<svg class="practice-card-icon" viewBox="0 0 24 24" style="stroke:#E97787;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
        '<div class="practice-card-title">Movement</div>' +
        '<div class="practice-card-duration" style="color:#E97787;">20 minutes</div>' +
        '<div class="practice-card-desc">Wake the body. Find your level.</div>' +
        '<div class="practice-card-link">Explore →</div>' +
      '</div>' +
      '<div class="practice-card" data-explore="attention" onclick="toggleExplore(\'attention\')">' +
        '<svg class="practice-card-icon" viewBox="0 0 24 24" style="stroke:none;"><circle cx="12" cy="12" r="4" fill="#61CCBA"/></svg>' +
        '<div class="practice-card-title">Pure attention practice</div>' +
        '<div class="practice-card-duration" style="color:#61CCBA;">15 minutes</div>' +
        '<div class="practice-card-desc">Meditation or breathing practice.</div>' +
        '<div class="practice-card-link">Explore →</div>' +
      '</div>' +
      '<div class="practice-card" data-explore="perspective" onclick="toggleExplore(\'perspective\')">' +
        '<svg class="practice-card-icon" viewBox="0 0 24 24" style="stroke:#F5C251;"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' +
        '<div class="practice-card-title">Perspective</div>' +
        '<div class="practice-card-duration" style="color:#F5C251;">30 minutes</div>' +
        '<div class="practice-card-desc">Where are you now? What are you aiming at?</div>' +
        '<div class="practice-card-link">Explore →</div>' +
      '</div>' +
      '<div class="practice-card" data-explore="ownwork" onclick="toggleExplore(\'ownwork\')">' +
        '<svg class="practice-card-icon" viewBox="0 0 24 24" style="stroke:#70ACEB;"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>' +
        '<div class="practice-card-title">Own work</div>' +
        '<div class="practice-card-duration" style="color:#70ACEB;">15 minutes</div>' +
        '<div class="practice-card-desc">Write, reflect, and update the map.</div>' +
        '<div class="practice-card-link">Explore →</div>' +
      '</div>' +
    '</div>' +

    // Expand panel
    '<div class="card-expand" id="cardExpand"></div>' +

  '</div>' +

  // Three muscles
  '<div class="section-2 program-anchor">' +
    '<h3 class="sub-heading" style="margin-top:0;">Every morning block works the same three muscles.</h3>' +
    '<div class="comparison" style="gap:0;">' +
      '<div style="flex:1; padding-right:40px; border-right:1px solid var(--text-ghost);">' +
        '<div class="comparison-title" style="color:#5FBFAB;">Attention</div>' +
        '<div class="comparison-body"><p>Where is it right now. Can you notice it has left, and bring it back.</p></div>' +
      '</div>' +
      '<div style="flex:1; padding:0 40px; border-right:1px solid var(--text-ghost);">' +
        '<div class="comparison-title" style="color:#70ACEB;">Articulation</div>' +
        '<div class="comparison-body"><p>Can you put words on what\'s actually true for you — words that match the thing rather than approximate it.</p></div>' +
      '</div>' +
      '<div style="flex:1; padding-left:40px;">' +
        '<div class="comparison-title" style="color:#F5C251;">Perception</div>' +
        '<div class="comparison-body"><p>Can you take in another person, or are you waiting for the gap so you can speak.</p></div>' +
      '</div>' +
    '</div>' +
  '</div>' +

  // Who we are
  '<div id="s-who" class="section-2 program-anchor">' +
    '<div class="section-label">Who we are</div>' +
    '<div class="bio-row">' +
      '<img src="Images/Aleks.jpeg" alt="Olek" style="width:180px; height:180px; border-radius:50%; object-fit:cover; flex-shrink:0;">' +
      '<div class="body-text" style="max-width:500px;">' +
        '<p><strong>Olek</strong></p>' +
        '<p>Olek spent a decade mapping systems for organisations with a high client-centric focus — until he realised he was his own biggest client, and the one he was least focused on. By not seeing himself, he had been living in a high-functioning depression without recognising it.</p>' +
        '<p>He stepped away from his assignments and turned those same observational skills inward. He trained in coaching, mediation, Transformational Presence and Transformational Communication.</p>' +
        '<p>He now works with men who look successful from the outside while something quieter stays unmet. He is developing the method and process. He guides the mapping work, holds the space, and stays in the process alongside the group.</p>' +
      '</div>' +
    '</div>' +
    '<div class="bio-row">' +
      '<img src="Images/Mike.png" alt="Mike" style="width:180px; height:180px; border-radius:50%; object-fit:cover; flex-shrink:0;">' +
      '<div class="body-text" style="max-width:500px;">' +
        '<p><strong>Mike</strong></p>' +
        '<p>Mike is a movement guy. He is the founder of the "In Hope to Inspire" initiative and a moderator of philosophy forums. Having lived across the globe, he learns from local teachers in every country he visits.</p>' +
        '<p>He has completed 1,000+ hours of yoga teacher trainings and spent countless more on mats and floors, practising calisthenics and functional training, all with the curiosity of a child.</p>' +
        '<p>He is a creative soul who tries to find symbolism in everyday moments. He is here to lead the movement and breathwork, co-host the meditations and... bring the vibes.</p>' +
      '</div>' +
    '</div>' +
  '</div>' +

  // The details
  '<div id="s-details" class="section-2 program-anchor">' +
    '<div class="section-label">The details</div>' +
    '<h2 class="section-heading">Everything you need to know.</h2>' +
    '<div style="display:flex; flex-direction:column; gap:16px; max-width:760px;">' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#5FBFAB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>When</strong> — 5:30 to 7:00 CET, Monday to Friday, for two weeks. Ten sessions.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#5FBFAB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>Where</strong> — Online.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#5FBFAB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>Language</strong> — English.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#5FBFAB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>Group size</strong> — Eight. The rounds are timed and split between the group, so every person added takes minutes from everyone else. Eight is the point where there\'s still room to actually be heard.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#5FBFAB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>Price</strong> — 999 PLN for the two weeks.</p><p>This is the first cohort. You get the room at its smallest and the two of us at our most invested — and you\'re in something we\'re still testing in the open. Hence the price. It won\'t be this again.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#5FBFAB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>If it isn\'t worth it</strong> — Tell us honestly what didn\'t work and you get your money back. No argument, no process. We\'d rather have the feedback than the payment.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#5FBFAB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>Recordings</strong> — Every session is recorded and sent to you. Treat them as a backup for the morning something genuinely goes wrong, not as an alternative. The group is the mechanism, not the content — a recording gives you what was said and none of what matters.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#5FBFAB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>Before we start</strong> — A call with everyone the week before. We go through how the two weeks work, answer whatever you want to ask, and point you at the map so you arrive with something already under you.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#5FBFAB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>Dates</strong> — [ TBD ]</p></div></div>' +
    '</div>' +
  '</div>' +

  // Who it isn't for
  '<div id="s-filter" class="section-2 program-anchor">' +
    '<div class="section-label">Who it isn\'t for</div>' +
    '<h2 class="section-heading">The honest filter.</h2>' +
    '<div style="display:flex; flex-direction:column; gap:16px; max-width:760px;">' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#E8655A; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>If you\'re in crisis right now.</strong> There\'s no clinical support in this room, and a timed round at 5:30 is the wrong container for acute distress. Get that first. This will still be here.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#E8655A; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>If you can\'t do all ten.</strong> Sessions are recorded, but the group is the mechanism, not the content. Half the mornings isn\'t half the value.</p></div></div>' +
    '</div>' +
  '</div>' +

  '</div>'; // close program-scroll

  // Initialize donut preview (delay for DOM to be ready)
  setTimeout(initProgramDonut, 50);
  setTimeout(initProgramNav, 50);
}

function initProgramNav() {
  var sections = [
    { id: 's-what', label: 'What this actually is' },
    { id: 's-both', label: 'Playing both games' },
    { type: 'divider' },
    { id: 's-program', label: 'The program' },
    { id: 's-gives', label: 'What it brings' },
    { id: 's-do', label: 'What we do' },
    { type: 'divider' },
    { id: 's-who', label: 'Who we are' },
    { id: 's-details', label: 'The details' },
    { id: 's-filter', label: 'Who it isn\'t for' }
  ];


  // Build section nav
  var sidebar = document.querySelector('.sidebar');
  var navContainer = document.createElement('div');
  navContainer.id = 'programNav';
  navContainer.style.display = 'flex';
  navContainer.style.flexDirection = 'column';

  sections.forEach(function(s) {
    if (s.type === 'divider') {
      var div = document.createElement('div');
      div.style.cssText = 'height:1px; background:var(--text-ghost); margin:8px 0;';
      navContainer.appendChild(div);
      return;
    }
    var link = document.createElement('a');
    link.className = 'sidebar-card';
    link.setAttribute('data-section', s.id);
    link.style.textDecoration = 'none';
    link.style.display = 'block';
    link.innerHTML = '<div class="sidebar-label">' + s.label + '</div>';
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var el = document.getElementById(s.id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.innerWidth <= 768) closeSidebar();
    });
    navContainer.appendChild(link);
  });

  // Insert before the theme toggle
  var themeToggle = document.querySelector('.sidebar-footer');
  sidebar.insertBefore(navContainer, themeToggle);

  // IntersectionObserver to highlight active section
  var navLinks = navContainer.querySelectorAll('.sidebar-card');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function(l) { l.classList.remove('active'); });
        var active = navContainer.querySelector('[data-section="' + entry.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px', root: contentEl });

  sections.forEach(function(s) {
    var el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });

  // Hero observer — hide sidebar when hero is in view
  var sidebarEl = document.querySelector('.sidebar');
  var contentEl = document.getElementById('content');
  var arrowEl = document.querySelector('.scroll-arrow');

  // Start with nav hidden
  sidebarEl.classList.add('nav-hidden');

  var heroObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        sidebarEl.classList.add('nav-hidden');
      } else {
        sidebarEl.classList.remove('nav-hidden');
      }
    });
  }, { threshold: 0, root: contentEl });

  if (arrowEl) heroObserver.observe(arrowEl);

  // Store cleanup function for when navigating away
  window._cleanupProgramNav = function() {
    navContainer.remove();
    observer.disconnect();
    heroObserver.disconnect();
    sidebarEl.classList.remove('nav-hidden');
  };
}

// ────────────────────────────────────────
// Explore expand panels
// ────────────────────────────────────────
var exploreContent = {
  movement: '<span class="card-expand-close" onclick="toggleExplore(null)">✕</span>' +
    '<div class="body-text">' +
      '<p>Twenty minutes at the start. Energy moving in the body before anything else happens.</p>' +
      '<p>It also does something else. The sequence builds across the two weeks, and somewhere in that you meet your own edge — the point where your mind wants a bigger step than your body is currently at. What you do there is worth watching. Whether you push past it. Whether the critic shows up when someone else goes further. Whether you can find the place where you\'re working and not straining.</p>' +
      '<p><strong>Finding your own level isn\'t a compromise. It\'s the skill.</strong></p>' +
    '</div>' +
    '<div class="program-divider" style="margin:32px 0;"></div>' +
    '<div class="movement-chapter" onclick="event.stopPropagation(); toggleMovementChapter(this)"><div class="movement-chapter-header"><img class="movement-icon" src="movement-chapter-icons/01-mapping-the-body.svg" style="width:32px; height:32px;"><div class="comparison-title" style="margin:0;">1. Mapping the Body</div><span class="movement-chapter-toggle">+</span></div><div class="movement-chapter-body"><div class="body-text"><p>The whole body wakes up gradually as attention moves from one joint to the next. We check where we are at the start and notice what feels open, restricted, light or heavy today. This first scan gives us a reference point for the rest of the journey.</p></div></div></div>' +
    '<div class="movement-chapter" onclick="event.stopPropagation(); toggleMovementChapter(this)"><div class="movement-chapter-header"><img class="movement-icon" src="movement-chapter-icons/02-spinal-mobilization.svg" style="width:32px; height:32px;"><div class="comparison-title" style="margin:0;">2. Spinal Mobilization</div><span class="movement-chapter-toggle">+</span></div><div class="movement-chapter-body"><div class="body-text"><p>The spine begins to move in waves, curves and individual segments. Breath supports the movement while unnecessary tension starts to soften. This reduces stiffness and prepares the spine to support the rest of the body.</p></div></div></div>' +
    '<div class="movement-chapter" onclick="event.stopPropagation(); toggleMovementChapter(this)"><div class="movement-chapter-header"><img class="movement-icon" src="movement-chapter-icons/03-feet-ankles-knees.svg" style="width:32px; height:32px;"><div class="comparison-title" style="margin:0;">3. Feet, Ankles & Knees</div><span class="movement-chapter-toggle">+</span></div><div class="movement-chapter-body"><div class="body-text"><p>We explore and gradually increase the available range in the feet, ankles and knees. By changing how we place the feet and distribute our weight, we discover what gives us stability. This creates a stronger foundation for balancing, squatting and moving in daily life.</p></div></div></div>' +
    '<div class="movement-chapter" onclick="event.stopPropagation(); toggleMovementChapter(this)"><div class="movement-chapter-header"><img class="movement-icon" src="movement-chapter-icons/04-shoulders-scapular-control-coordination.svg" style="width:32px; height:32px;"><div class="comparison-title" style="margin:0;">4. Shoulders, Scapular Control & Coordination</div><span class="movement-chapter-toggle">+</span></div><div class="movement-chapter-body"><div class="body-text"><p>The shoulder blades glide while the arms explore different directions and rhythms. Coordination challenges the brain as much as the body. Better control around the shoulders creates greater freedom, stability and confidence when we reach, carry or support weight.</p></div></div></div>' +
    '<div class="movement-chapter" onclick="event.stopPropagation(); toggleMovementChapter(this)"><div class="movement-chapter-header"><img class="movement-icon" src="movement-chapter-icons/05-hip-mobility-opening.svg" style="width:32px; height:32px;"><div class="comparison-title" style="margin:0;">5. Hip Mobility & Opening</div><span class="movement-chapter-toggle">+</span></div><div class="movement-chapter-body"><div class="body-text"><p>The hips loosen up as they explore rotation, shifting and their available range. The pelvis remains attentive while the legs learn to move more independently. This creates more space and ease in squatting, stepping and transitioning between positions.</p></div></div></div>' +
    '<div style="margin:32px 0; padding:16px 0; border-top:1px solid var(--text-ghost); border-bottom:1px solid var(--text-ghost);"><div class="comparison-title" style="margin:0;">The Weekend Challenge</div><div class="body-text" style="margin-top:8px;"><p>We set an intention for how we want to approach the weekend practice, whether to continue or rest. Afterwards, we pause and notice what we actually chose to do. We reflect on the feeling of accomplishment, the need for rest or the sense that we may have missed something. All is welcome, as long as it is noticed.</p></div></div>' +
    '<div class="movement-chapter" onclick="event.stopPropagation(); toggleMovementChapter(this)"><div class="movement-chapter-header"><img class="movement-icon" src="movement-chapter-icons/06-core-isometrics.svg" style="width:32px; height:32px;"><div class="comparison-title" style="margin:0;">6. Core & Isometrics</div><span class="movement-chapter-toggle">+</span></div><div class="movement-chapter-body"><div class="body-text"><p>The centre of the body creates stability while movement slows down or pauses. Isometric holds develop muscular strength and endurance with little or no movement through the joints. This improves joint stability and helps the body support both movement and everyday posture.</p></div></div></div>' +
    '<div class="movement-chapter" onclick="event.stopPropagation(); toggleMovementChapter(this)"><div class="movement-chapter-header"><img class="movement-icon" src="movement-chapter-icons/07-locomotion-flow.svg" style="width:32px; height:32px;"><div class="comparison-title" style="margin:0;">7. Locomotion & Flow</div><span class="movement-chapter-toggle">+</span></div><div class="movement-chapter-body"><div class="body-text"><p>The body travels through space using the hands, feet and changing points of support. Familiar positions begin connecting into playful sequences. Coordination, adaptability and confidence grow through locomotion, the art of moving.</p></div></div></div>' +
    '<div class="movement-chapter" onclick="event.stopPropagation(); toggleMovementChapter(this)"><div class="movement-chapter-header"><img class="movement-icon" src="movement-chapter-icons/08-pacing-the-movement.svg" style="width:32px; height:32px;"><div class="comparison-title" style="margin:0;">8. Pacing the Movement</div><span class="movement-chapter-toggle">+</span></div><div class="movement-chapter-body"><div class="body-text"><p>The same movement changes when we adjust its speed, pauses and transitions. Moving slowly reveals where control is present and where momentum usually takes over. By simply slowing down a movement that often goes unnoticed at a rapid pace, we discover something new about the body.</p></div></div></div>' +
    '<div class="movement-chapter" onclick="event.stopPropagation(); toggleMovementChapter(this)"><div class="movement-chapter-header"><img class="movement-icon" src="movement-chapter-icons/09-rotation-counterbalance.svg" style="width:32px; height:32px;"><div class="comparison-title" style="margin:0;">9. Rotation & Counterbalance</div><span class="movement-chapter-toggle">+</span></div><div class="movement-chapter-body"><div class="body-text"><p>The body rotates while one side supports or balances the movement of the other. Attention crosses the midline and connects opposite limbs. This develops spatial awareness, coordination and whole-body integration.</p></div></div></div>' +
    '<div class="movement-chapter" onclick="event.stopPropagation(); toggleMovementChapter(this)"><div class="movement-chapter-header"><img class="movement-icon" src="movement-chapter-icons/10-integration.svg" style="width:32px; height:32px;"><div class="comparison-title" style="margin:0;">10. Integration</div><span class="movement-chapter-toggle">+</span></div><div class="movement-chapter-body"><div class="body-text"><p>The body brings together the patterns, qualities and skills explored throughout the process. Familiar movements connect with greater choice, awareness and fluidity. The practice becomes something we can understand, adapt, make our own and integrate into our routines.</p></div></div></div>',
  attention: '<span class="card-expand-close" onclick="toggleExplore(null)">✕</span>' +
    '<div class="body-text">' +
      '<p>Meditation or breathing, after the movement. You\'re training attention all morning, but here it\'s the whole task rather than a background condition.</p>' +
      '<p>Breath is the lever from attention into the nervous system. Meditation is practice at the same thing in a different register — noticing where your attention has gone, and choosing where to put it before it leaves again.</p>' +
    '</div>',
  perspective: '<span class="card-expand-close" onclick="toggleExplore(null)">✕</span>' +
    '<div class="body-text">' +
      '<p>The largest part of the two weeks, and it takes two forms.</p>' +
      '<p><strong>Where are you now.</strong> Every morning, in the circle or in pairs. Simple question, and it stops being simple immediately — you find out how much is running in you and how little of it you can currently put into words. That gap is the information. You say it out loud, someone hears it, and the saying is what makes you know it.</p>' +
      '<p><strong>Working a map together.</strong> Every morning something goes on the table — a model, a structure, a way of looking. Nobody explains it at you. Everyone looks and says what moves in them, and what surfaces is each person\'s angle, including ours. Most people have never done this. It\'s a different thing from talking about yourself, and it tends to show you your own shape more directly.</p>' +
      '<p>Both are practice in the balance nobody teaches: when you\'re perceiving and when you\'re preparing to send.</p>' +
    '</div>',
  ownwork: '<span class="card-expand-close" onclick="toggleExplore(null)">✕</span>' +
    '<div class="body-text">' +
      '<p>Space to sit undisturbed and articulate. Setting what you\'re aiming at. Coming back and updating it as the days move. No audience. Just the work of getting something into words for yourself first.</p>' +
    '</div>'
};

var currentExplore = null;

function toggleExplore(key) {
  var isMobile = window.innerWidth <= 768;
  var panel = document.getElementById('cardExpand');
  var cards = document.querySelectorAll('.practice-card');

  // Close all inline panels
  document.querySelectorAll('.card-expand-inline').forEach(function(el) {
    el.remove();
  });

  // Close if same card or null
  if (key === null || key === currentExplore) {
    panel.classList.remove('open');
    panel.innerHTML = '';
    cards.forEach(function(c) { c.classList.remove('active'); });
    currentExplore = null;
    return;
  }

  cards.forEach(function(c) {
    c.classList.toggle('active', c.getAttribute('data-explore') === key);
  });
  currentExplore = key;

  if (isMobile) {
    // Insert content inside the clicked card
    panel.classList.remove('open');
    panel.innerHTML = '';
    var activeCard = document.querySelector('.practice-card[data-explore="' + key + '"]');
    if (activeCard) {
      var inline = document.createElement('div');
      inline.className = 'card-expand-inline';
      inline.innerHTML = '<div style="margin-top:16px; padding-top:16px; border-top:1px solid var(--text-ghost);">' +
        '<span class="card-expand-close" onclick="event.stopPropagation(); toggleExplore(null)">✕</span>' +
        exploreContent[key].replace(/<span class="card-expand-close"[^>]*>[^<]*<\/span>/, '') +
      '</div>';
      activeCard.appendChild(inline);
      setTimeout(function() {
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  } else {
    // Desktop: expand below cards row
    panel.innerHTML = exploreContent[key] || '';
    panel.classList.add('open');
    setTimeout(function() {
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}



function toggleMovementChapter(el) {
  var wasOpen = el.classList.contains('open');
  document.querySelectorAll('.movement-chapter.open').forEach(function(c) {
    c.classList.remove('open');
  });
  if (!wasOpen) el.classList.add('open');
}

function initProgramDonut() {
  var mockParents = [
    { name: 'Cognitive & Intellectual', score: 3, icon: '<path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7zM9 21h6"/>' },
    { name: 'Rest & Recovery', score: 5, icon: '<path d="M3 11h1M6.3 6.3l.7.7M12 3v1M17.7 6.3l-.7.7M21 11h-1"/><path d="M5 17h14M7 21h10"/><path d="M12 11a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z"/>' },
    { name: 'Identity & Esteem', score: 2, icon: '<circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>' },
    { name: 'Social Connection', score: 6, icon: '<path d="M16 21v-2a4 4 0 0 0-3-3.87M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/><circle cx="16" cy="4" r="2.5"/>' },
    { name: 'Safety & Security', score: 4, icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
    { name: 'Autonomy & Freedom', score: 1, icon: '<path d="M5 12h14M12 5l7 7-7 7"/>' },
    { name: 'Health & Vitality', score: 7, icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>' },
    { name: 'Meaning', score: 3, icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>' }
  ];

  var svg = document.getElementById('startDonut');
  if (!svg) return;

  function renderRandom() {
    mockParents.forEach(function(p) {
      p.score = Math.floor(Math.random() * 7) + 1;
    });
    Donut.render('startDonut', mockParents, {
      outline: true,
      showLabels: true,
      noHover: true
    });
  }

  var donutContainer = document.querySelector('.donut-preview');
  var centerBtn = document.querySelector('.donut-center-btn');

  function fireRipple() {
    if (!donutContainer) return;
    var wave = document.createElement('div');
    wave.className = 'donut-ripple';
    donutContainer.appendChild(wave);
    wave.addEventListener('animationend', function() { wave.remove(); });
  }

  function wobbleBtn() {
    if (!centerBtn) return;
    centerBtn.style.animation = 'none';
    centerBtn.offsetHeight;
    centerBtn.style.animation = 'donut-wobble 1.5s ease-in-out';
  }

  // Unified cycle: render → fade in → wobble+waves → wait → fade out → repeat
  function runCycle() {
    // 1. New random scores + render
    renderRandom();
    var segs = Array.from(svg.querySelectorAll('.seg-hover'));
    segs.reverse();

    // Hide all children
    for (var ci = 0; ci < svg.children.length; ci++) {
      if (svg.children[ci].tagName !== 'defs') {
        svg.children[ci].style.transition = 'none';
        svg.children[ci].setAttribute('opacity', '0');
      }
    }
    svg.offsetHeight;

    // Show inner circle
    var circle = svg.querySelector('circle');
    if (circle) { circle.style.transition = 'opacity 0.5s ease-out'; circle.setAttribute('opacity', '1'); }

    // 2. Fade in segments (cascade)
    var fadeInTime = 100 + segs.length * 80 + 1500;
    segs.forEach(function(s, i) {
      var label = svg.querySelector('.seg-label[data-name="' + s.dataset.name + '"]');
      setTimeout(function() {
        s.style.transition = 'opacity 1.5s ease-in-out';
        s.setAttribute('opacity', '1');
        if (label) { label.style.transition = 'opacity 1.5s ease-in-out'; label.setAttribute('opacity', '1'); }
      }, 100 + i * 80);
    });

    // 3. Wobble + waves after fade in completes
    setTimeout(function() {
      wobbleBtn();
      fireRipple();
      setTimeout(fireRipple, 300);
    }, fadeInTime);

    // 4. Wait, then fade out
    var waitTime = fadeInTime + 4000;
    setTimeout(function() {
      var currentSegs = Array.from(svg.querySelectorAll('.seg-hover'));
      currentSegs.forEach(function(s, i) {
        var label = svg.querySelector('.seg-label[data-name="' + s.dataset.name + '"]');
        setTimeout(function() {
          s.style.transition = 'opacity 1s ease-in-out';
          s.setAttribute('opacity', '0');
          if (label) { label.style.transition = 'opacity 1s ease-in-out'; label.setAttribute('opacity', '0'); }
        }, i * 100);
      });

      // 5. After fade out, restart cycle
      var fadeOutTime = currentSegs.length * 100 + 1200;
      setTimeout(runCycle, fadeOutTime);
    }, waitTime);
  }

  // Start first cycle
  runCycle();

  // Wobble + ripple on hover
  if (centerBtn) {
    centerBtn.addEventListener('mouseenter', function() {
      wobbleBtn();
      fireRipple();
      setTimeout(fireRipple, 300);
    });
  }
}

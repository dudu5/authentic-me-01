function renderProgram(container) {
  container.innerHTML = '<div class="program-scroll">' +

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

  // The problem with the inner game
  '<div class="split-section program-anchor">' +
    '<div class="split-left">' +
      '<div class="section-label">Why this is harder than it looks</div>' +
      '<h2 class="section-heading">Three things make it <span style="color:var(--color-red);">tough</span></h2>' +
      '<div class="comparison-title">1. Both games keep moving</div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>The outer world changes. What you need also changes.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>A reading you took once doesn\'t stay accurate forever.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>There\'s no "figure it out once and you\'re done."</span></div>' +
      '<div class="comparison-title" style="margin-top:24px;">2. Your instrument is mistuned</div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Not broken — just calibrated by circumstances you didn\'t choose.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>The signal reaches you already bent.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Reading it accurately is a skill, not just a matter of paying more attention.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>And those muscles are untrained — nothing ever asked you to use them.</span></div>' +
      '<div class="comparison-title" style="margin-top:24px;">3. Your system defends what\'s already there</div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Not because it\'s good for you — because it\'s automated.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Running the old patterns is almost free.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>Changing them means questioning something your system stopped questioning years ago.</span></div>' +
      '<div class="arrow-bullet"><span style="color:var(--color-teal);">→</span> <span>That costs energy your biology is built to protect.</span></div>' +
    '</div>' +
    '<div class="split-right">' +
      '<div class="donut-preview">' +
        '<svg id="previewDonut" viewBox="-10 -10 220 220" width="100%" height="100%"></svg>' +
        '<a href="#/needs" class="donut-center-btn">Start<br>Mapping</a>' +
      '</div>' +
    '</div>' +
  '</div>' +

  // Ten mornings
  '<div class="section-2 program-anchor">' +
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

  // What we actually do
  '<div id="s-do" class="section-2 program-anchor">' +
    '<div class="section-label">What we actually do</div>' +
    '<h2 class="section-heading">Every morning block works the same three muscles.</h2>' +
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
    '<div class="body-text">' +
      '<p>Most conversations run at low quality because everyone is fighting for the microphone. Not rudely, not loudly — it can happen at a very slow pace. Watch how rarely a floor stays open for ten seconds with nobody filling it.</p>' +
      '<p>The same thing runs inside you. Parts of your mind competing for the floor, none of them waiting, most of them talking over whatever is quieter underneath. What people call the monkey mind is a room with the same problem.</p>' +
    '</div>' +
    '<p class="emphasis-text">The morning is those three muscles, worked in four settings.</p>' +
  '</div>' +

  // Timeline
  '<div class="program-anchor" style="max-width:1120px; padding:0 0 32px;">' +
    '<div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:16px;">' +
      '<h3 class="sub-heading" style="margin-top:0; margin-bottom:0;">The shape of a morning</h3>' +
      '<span style="font-size:15px; font-weight:400; color:var(--text-visible); opacity:0.6;">90 minutes · 5:30–7:00</span>' +
    '</div>' +
    '<div class="program-divider"></div>' +
    '<div style="margin-bottom:32px;">' +
      '<div style="display:flex; justify-content:space-between; font-size:14px; color:var(--text-visible); opacity:0.5; margin-bottom:8px;">' +
        '<span>5:30</span><span style="margin-left:8%;">5:50</span><span style="margin-left:4%;">6:05</span><span style="margin-left:16%;">6:35</span><span style="margin-left:12%;">6:50</span><span>7:00</span>' +
      '</div>' +
      '<div style="display:flex; height:6px; border-radius:3px; overflow:hidden; gap:3px;">' +
        '<div style="flex:20; background:#E97787; border-radius:3px;"></div>' +
        '<div style="flex:15; background:#61CCBA; border-radius:3px;"></div>' +
        '<div style="flex:30; background:#F5C251; border-radius:3px;"></div>' +
        '<div style="flex:15; background:#70ACEB; border-radius:3px;"></div>' +
        '<div style="flex:10; background:#61CCBA; border-radius:3px;"></div>' +
      '</div>' +
      '<div style="display:flex; font-size:14px; color:var(--text-visible); opacity:0.7; margin-top:8px;">' +
        '<span style="flex:20;">Movement</span><span style="flex:15;">Attention</span><span style="flex:30;">Perspective</span><span style="flex:15;">Own work</span><span style="flex:10;">Attention</span>' +
      '</div>' +
    '</div>' +
    '<div class="program-divider" style="background:rgba(97,204,186,0.15);"></div>' +
    '<div style="display:grid; grid-template-columns:1fr 1fr; gap:32px 80px; margin-bottom:32px;">' +
      '<div><p style="font-size:15px; font-weight:500; color:var(--text-bright); margin-bottom:8px; display:flex; align-items:center; gap:8px;"><svg viewBox="0 0 24 24" style="width:16px; height:16px; stroke:#E97787; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>Movement</p><p style="font-size:15px; color:var(--text-visible); opacity:0.7;">Wake the body. Find your level.</p></div>' +
      '<div><p style="font-size:15px; font-weight:500; color:var(--text-bright); margin-bottom:8px; display:flex; align-items:center; gap:8px;"><svg viewBox="0 0 24 24" style="width:16px; height:16px; stroke:#61CCBA; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0;"><circle cx="12" cy="12" r="4" fill="#61CCBA" stroke="none"/></svg>Pure attention practice</p><p style="font-size:15px; color:var(--text-visible); opacity:0.7;">Meditation or breathing practice.</p></div>' +
      '<div><p style="font-size:15px; font-weight:500; color:var(--text-bright); margin-bottom:8px; display:flex; align-items:center; gap:8px;"><svg viewBox="0 0 24 24" style="width:16px; height:16px; stroke:#F5C251; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0;"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>Perspective</p><p style="font-size:15px; color:var(--text-visible); opacity:0.7;">Where are you now? What are you aiming at?</p></div>' +
      '<div><p style="font-size:15px; font-weight:500; color:var(--text-bright); margin-bottom:8px; display:flex; align-items:center; gap:8px;"><svg viewBox="0 0 24 24" style="width:16px; height:16px; stroke:#70ACEB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0;"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>Own work</p><p style="font-size:15px; color:var(--text-visible); opacity:0.7;">Write, reflect, and update the map.</p></div>' +
    '</div>' +
    '<div class="program-divider" style="background:rgba(97,204,186,0.15);"></div>' +
    '<div style="display:flex; justify-content:space-between; align-items:center; max-width:1120px; margin-top:32px;">' +
      '<span style="font-size:15px; color:var(--text-visible); opacity:0.5;">Repeated every weekday for two weeks — 10 mornings</span>' +
    '</div>' +
  '</div>' +

  // Detailed descriptions
  '<div class="section-2 program-anchor" style="padding-top:32px; padding-bottom:0;">' +
    '<h3 class="sub-heading" style="margin-top:0; display:flex; align-items:center; gap:12px;"><svg viewBox="0 0 24 24" style="width:24px; height:24px; stroke:#E97787; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>Movement</h3>' +
    '<div class="body-text">' +
      '<p>Twenty minutes at the start. Energy moving in the body before anything else happens.</p>' +
      '<p>It also does something else. The sequence builds across the two weeks, and somewhere in that you meet your own edge — the point where your mind wants a bigger step than your body is currently at. What you do there is worth watching. Whether you push past it. Whether the critic shows up when someone else goes further. Whether you can find the place where you\'re working and not straining.</p>' +
      '<p><strong>Finding your own level isn\'t a compromise. It\'s the skill.</strong></p>' +
    '</div>' +
    '<h3 class="sub-heading" style="display:flex; align-items:center; gap:12px;"><svg viewBox="0 0 24 24" style="width:24px; height:24px; stroke:none; fill:#61CCBA; flex-shrink:0;"><circle cx="12" cy="12" r="4"/></svg>Pure attention practice</h3>' +
    '<div class="body-text">' +
      '<p>Meditation or breathing, after the movement. You\'re training attention all morning, but here it\'s the whole task rather than a background condition.</p>' +
      '<p>Breath is the lever from attention into the nervous system. Meditation is practice at the same thing in a different register — noticing where your attention has gone, and choosing where to put it before it leaves again.</p>' +
    '</div>' +
    '<h3 class="sub-heading" style="display:flex; align-items:center; gap:12px;"><svg viewBox="0 0 24 24" style="width:24px; height:24px; stroke:#F5C251; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0;"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>Sharing perspective</h3>' +
    '<div class="body-text">' +
      '<p>The largest part of the two weeks, and it takes two forms.</p>' +
      '<p><strong>Where are you now.</strong> Every morning, in the circle or in pairs. Simple question, and it stops being simple immediately — you find out how much is running in you and how little of it you can currently put into words. That gap is the information. You say it out loud, someone hears it, and the saying is what makes you know it.</p>' +
      '<p><strong>Working a map together.</strong> Every morning something goes on the table — a model, a structure, a way of looking. Nobody explains it at you. Everyone looks and says what moves in them, and what surfaces is each person\'s angle, including ours. Most people have never done this. It\'s a different thing from talking about yourself, and it tends to show you your own shape more directly.</p>' +
      '<p>Both are practice in the balance nobody teaches: when you\'re perceiving and when you\'re preparing to send.</p>' +
    '</div>' +
    '<h3 class="sub-heading" style="display:flex; align-items:center; gap:12px;"><svg viewBox="0 0 24 24" style="width:24px; height:24px; stroke:#70ACEB; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0;"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>Your own time</h3>' +
    '<div class="body-text"><p>Space to sit undisturbed and articulate. Setting what you\'re aiming at. Coming back and updating it as the days move. No audience. Just the work of getting something into words for yourself first.</p></div>' +
  '</div>' +

  // What ten mornings gives you
  '<div class="section-2 program-anchor">' +
    '<h3 class="sub-heading" style="margin-top:0;">What ten mornings gives you</h3>' +
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

  // Who we are
  '<div id="s-who" class="section-2 program-anchor">' +
    '<div class="section-label">Who we are</div>' +
    '<h2 class="section-heading">TBD</h2>' +
    '<div style="display:flex; gap:40px; align-items:flex-start; margin-top:32px;">' +
      '<img src="Images/Aleks.jpeg" alt="Aleks" style="width:180px; height:180px; border-radius:50%; object-fit:cover;">' +
      '<div class="body-text" style="max-width:500px;"><p>TBD</p></div>' +
    '</div>' +
    '<div style="display:flex; gap:40px; align-items:flex-start; margin-top:32px;">' +
      '<img src="Images/Mike.jpg" alt="Mike" style="width:180px; height:180px; border-radius:50%; object-fit:cover;">' +
      '<div class="body-text" style="max-width:500px;"><p>TBD</p></div>' +
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
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#E8655A; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>If you want to be told how it is.</strong> We work through the map together rather than teaching it at you. If you want someone with answers, you\'ll find this frustrating.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#E8655A; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>If you want something fixed in two weeks.</strong> It won\'t be, and we\'d rather say so now.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#E8655A; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>If you can\'t do all ten.</strong> Sessions are recorded, but the group is the mechanism, not the content. Half the mornings isn\'t half the value.</p></div></div>' +
      '<div style="display:flex; gap:16px; align-items:flex-start;"><svg viewBox="0 0 24 24" style="width:20px; height:20px; stroke:#E8655A; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; fill:none; flex-shrink:0; margin-top:2px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><div class="body-text" style="margin-bottom:0;"><p><strong>If you already have a daily practice, a map, and people who see you in it</strong> — you probably don\'t need this. If you have the first two and not the third, you might.</p></div></div>' +
    '</div>' +
  '</div>' +

  // Resistance and certainty
  '<div class="section-2 program-anchor">' +
    '<h3 class="sub-heading" style="margin-top:0;">What resistance can feel like</h3>' +
    '<div class="body-text"><p>So something in you will push back. It won\'t feel like resistance — it\'ll feel like good reasons. Not now. Not this. Later, when things calm down.</p></div>' +
    '<h3 class="sub-heading">Why certainty is seductive</h3>' +
    '<div class="body-text"><p>The same mechanism makes being wrong expensive. Being wrong means something has to change, and change costs, so your system would rather you were certain. That\'s worth knowing about yourself:</p></div>' +
    '<p class="emphasis-text">The feeling of already understanding your own patterns is exactly what the defence looks like from inside.</p>' +
    '<div class="body-text"><p>That\'s what you\'re up against. Not weakness. A system doing its job.</p></div>' +
  '</div>' +

  // Two ways this stays hidden
  '<div class="section-2 program-anchor">' +
    '<h3 class="sub-heading" style="margin-top:0;">Two ways this stays hidden.</h3>' +
    '<div class="body-text" style="margin-bottom:32px;"><p>Most people assume these are different stories. They usually aren\'t.</p></div>' +
    '<div class="comparison">' +
      '<div class="comparison-col">' +
        '<div class="comparison-title" style="opacity:0.5;">If you won</div>' +
        '<div class="comparison-body">' +
          '<p><strong>Nothing has visibly gone wrong.</strong></p>' +
          '<p>The work holds, the people are there, you\'re doing what you\'re supposed to be doing — so there\'s no error signal and no reason to look.</p>' +
          '<p>And it starts to feel illegitimate to admit anything\'s off.</p>' +
          '<p>You got the thing. What exactly are you complaining about?</p>' +
          '<p>The success doesn\'t just hide the problem; it makes the problem embarrassing to have.</p>' +
        '</div>' +
      '</div>' +
      '<div class="comparison-col">' +
        '<div class="comparison-title" style="opacity:0.5;">If you didn\'t</div>' +
        '<div class="comparison-body">' +
          '<p><strong>The outer game still has you.</strong></p>' +
          '<p>Just from the other side — still measuring, still short, still quietly certain that the next version of winning is where your worth gets settled.</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="program-divider"></div>' +
    '<p class="emphasis-text">Either way you\'re in the same water.</p>' +
  '</div>' +

  '</div>'; // close program-scroll

  // Initialize donut preview (delay for DOM to be ready)
  setTimeout(initProgramDonut, 50);
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

  var svg = document.getElementById('previewDonut');
  if (!svg) return;

  function renderRandom() {
    mockParents.forEach(function(p) {
      p.score = Math.floor(Math.random() * 7) + 1;
    });
    Donut.render('previewDonut', mockParents, {
      outline: true,
      showLabels: true,
      noHover: true
    });
  }

  renderRandom();

  // Ripple + wobble effects
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

  function fireDouble() {
    fireRipple();
    setTimeout(fireRipple, 300);
    wobbleBtn();
  }

  // Fire on load and every 10s
  setTimeout(fireDouble, 1500);
  setInterval(fireDouble, 10000);

  // Wobble + ripple on hover
  if (centerBtn) {
    centerBtn.addEventListener('mouseenter', function() {
      wobbleBtn();
      fireRipple();
      setTimeout(fireRipple, 300);
    });
  }

  // Cycle with new random scores every 8 seconds
  setInterval(function() {
    var segs = Array.from(svg.querySelectorAll('.seg-hover'));
    // Fade out
    segs.forEach(function(s, i) {
      var label = svg.querySelector('.seg-label[data-name="' + s.dataset.name + '"]');
      setTimeout(function() {
        s.style.transition = 'opacity 1s ease-in-out';
        s.setAttribute('opacity', '0');
        if (label) { label.style.transition = 'opacity 1s ease-in-out'; label.setAttribute('opacity', '0'); }
      }, i * 100);
    });
    // Re-render after fade out
    setTimeout(function() {
      renderRandom();
      var newSegs = Array.from(svg.querySelectorAll('.seg-hover'));
      newSegs.reverse();
      // Hide new children
      for (var ci = 0; ci < svg.children.length; ci++) {
        if (svg.children[ci].tagName !== 'defs') {
          svg.children[ci].style.transition = 'none';
          svg.children[ci].setAttribute('opacity', '0');
        }
      }
      svg.offsetHeight;
      var circle = svg.querySelector('circle');
      if (circle) { circle.style.transition = 'opacity 0.5s ease-out'; circle.setAttribute('opacity', '1'); }
      // Fade in
      newSegs.forEach(function(s, i) {
        var label = svg.querySelector('.seg-label[data-name="' + s.dataset.name + '"]');
        setTimeout(function() {
          s.style.transition = 'opacity 1.5s ease-in-out';
          s.setAttribute('opacity', '1');
          if (label) { label.style.transition = 'opacity 1.5s ease-in-out'; label.setAttribute('opacity', '1'); }
        }, 100 + i * 80);
      });
    }, segs.length * 100 + 1000);
  }, 8000);
}

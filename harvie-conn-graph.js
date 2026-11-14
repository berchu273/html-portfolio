/* ============================================================================
   Harvie M. Conn — knowledge graph data
   ----------------------------------------------------------------------------
   This file is the content. harvie-conn-map.html is the engine that draws it.
   To study a different person, copy this file, change the data, and point a
   copy of the map page at it.

   NODE fields
     id       unique, never reuse or rename (notes are attached to it)
     type     root | facet | event | place | person | theme | work | source | question
     label    short name shown on the map
     parent   id of the node this sits under in the outline
     year     number, used only to place the item on the timeline scrubber (optional).
              If the exact year is not known, set "when" so a guess is never shown as a fact.
     when     display text for the date, e.g. "1960–72" (optional)
     kind     for works: book | edited | article | about | catalogue
     summary  one to three sentences
     status   sourced  = stated in the public sources listed
              verify   = from memory or a single source; check before relying on it
              open     = a question or a gap, not a claim
              ai       = suggested by an AI and not yet checked
     sources  list of source keys (see SOURCES) or {cite, url}

   EDGE fields:  from, to, rel (a short verb phrase)
   ========================================================================== */
window.KM = {
  subject: "Harvie M. Conn",
  years: [1933, 2002],

  SOURCES: {
    wiki:  { cite: "Wikipedia, “Harvie M. Conn”", url: "https://en.wikipedia.org/wiki/Harvie_M._Conn" },
    opc:   { cite: "OPC ministers record, “Harvie Maitland Conn”", url: "https://opc.ulsterworldly.com/ministers/harvie-maitland-conn/" },
    pca:   { cite: "PCA Historical Center, “August 28: Harvie Maitland Conn”", url: "https://thisday.pcahistory.org/2014/08/august-28/" },
    odbu:  { cite: "Our Daily Bread University, professor profile", url: "https://odbu.org/?p=27344" },
    gal:   { cite: "Galaxie index of Westminster Theological Journal articles", url: "https://www.galaxie.com/author/5994" },
    wm:    { cite: "Westminster Media archive (lectures)", url: "https://wm.wts.edu/" },
    wmmin: { cite: "Westminster Media, “The Ministry of Harvie Conn” (audio)", url: "https://wm.wts.edu/listen/the-ministry-of-harvie-conn" },
    wtsb:  { cite: "Westminster Bookstore, Harvie M. Conn listing", url: "https://www.wtsbooks.com/collections/harvie-m-conn" },
    prp:   { cite: "P&R Publishing author page", url: "https://www.prpbooks.com/authors/harvie-m-conn" },
    tgc:   { cite: "The Gospel Coalition, Timothy Keller timeline", url: "https://www.thegospelcoalition.org/timothykellerbook/timeline/" }
  },

  nodes: [
    { id: "conn", type: "root", label: "Harvie M. Conn", when: "1933–1999", year: 1933,
      summary: "Canadian-born Presbyterian minister, missionary to Korea, and professor of missions at Westminster Theological Seminary. A leading evangelical voice for urban mission and contextual theology.",
      status: "sourced", sources: ["wiki", "pca"] },

    /* ---------- The seven branches of the outline ---------- */
    { id: "f-man", type: "facet", label: "The Man", parent: "conn", summary: "His life, family, character and faith.", status: "sourced" },
    { id: "f-missionary", type: "facet", label: "The Missionary", parent: "conn", summary: "Church planting in New Jersey and twelve years in Korea.", status: "sourced" },
    { id: "f-educator", type: "facet", label: "The Educator", parent: "conn", summary: "Twenty-six years on the Westminster faculty: classroom, program builder, editor, mentor.", status: "sourced" },
    { id: "f-ideas", type: "facet", label: "His Ideas", parent: "conn", summary: "The themes and concepts that run through his teaching and writing.", status: "sourced" },
    { id: "f-works", type: "facet", label: "His Works", parent: "conn", summary: "A working bibliography: books, edited volumes, articles, and the parts still to be catalogued.", status: "sourced" },
    { id: "f-people", type: "facet", label: "His People", parent: "conn", summary: "Teachers, colleagues, co-authors and students.", status: "sourced" },
    { id: "f-research", type: "facet", label: "My Research", parent: "conn", summary: "Open questions, and the literature about him. This is the scaffold a dissertation would hang on.", status: "open" },

    /* ---------- The Man ---------- */
    { id: "born", type: "event", label: "Born in Regina", parent: "f-man", year: 1933, when: "April 7, 1933",
      summary: "Born in Regina, Saskatchewan, to Irish immigrant parents.", status: "sourced", sources: ["wiki"] },
    { id: "calvin", type: "event", label: "Calvin College", parent: "f-man", year: 1953, when: "A.B. 1953",
      summary: "Undergraduate study at Calvin College in Grand Rapids. The 1953 graduation year needs checking.", status: "verify", sources: ["wiki"] },
    { id: "wts-student", type: "event", label: "Student at Westminster", parent: "f-man", year: 1957, when: "B.D. 1957, Th.M. 1958",
      summary: "Earned the Bachelor of Divinity (1957) and Master of Theology (1958) at Westminster Theological Seminary.", status: "sourced", sources: ["wiki"] },
    { id: "dorothy", type: "person", label: "Dorothy Conn", parent: "f-man",
      summary: "His wife. They served together in Korea, and her poor health as well as his own led to his retirement.", status: "sourced", sources: ["pca"] },
    { id: "littd", type: "event", label: "Honorary Litt.D.", parent: "f-man", year: 1976, when: "1976",
      summary: "Honorary Doctor of Letters, reported as from Geneva College in 1976. Check the institution and year.", status: "verify", sources: ["odbu"] },
    { id: "retire", type: "event", label: "Retirement", parent: "f-man", year: 1998, when: "1998",
      summary: "Retired from Westminster because of his and Dorothy's poor health.", status: "sourced", sources: ["pca"] },
    { id: "death", type: "event", label: "Death", parent: "f-man", year: 1999, when: "August 28, 1999",
      summary: "Died in Wyndmoor, Pennsylvania, aged 66, after a long battle with cancer.", status: "sourced", sources: ["wiki", "pca"] },
    { id: "q-character", type: "question", label: "What was he like in person?", parent: "f-man",
      summary: "Humour, habits, how he prayed, how he treated students. Collect first-hand memories from the lectures and tributes.", status: "open" },

    /* ---------- The Missionary ---------- */
    { id: "stratford", type: "event", label: "Home missionary, Stratford NJ", parent: "f-missionary", year: 1957, when: "1957–60",
      summary: "Served as a home missionary at Stratford Orthodox Presbyterian Church in New Jersey.", status: "sourced", sources: ["opc"] },
    { id: "korea", type: "event", label: "Missionary in Korea", parent: "f-missionary", year: 1960, when: "1960–72",
      summary: "Served with the Orthodox Presbyterian mission in Korea in theological education, evangelism and broadcasting.", status: "sourced", sources: ["opc", "wiki"] },
    { id: "chongshin", type: "event", label: "Teaching in Seoul", parent: "korea", year: 1962, when: "years to find",
      summary: "Taught New Testament at the General Assembly Theological Seminary in Seoul for part of his time in Korea. Exact years to be found.", status: "verify", sources: ["wiki"] },
    { id: "outreach", type: "event", label: "Ministry among the poor", parent: "korea", year: 1965, when: "1960s",
      summary: "He and Dorothy ministered to prostitutes, pimps and the poor in Seoul. This experience shaped his view of people as both sinners and sinned against.", status: "sourced", sources: ["pca", "odbu"] },
    { id: "seoul", type: "place", label: "Seoul", parent: "korea", summary: "Where he lived and worked for twelve years.", status: "sourced" },
    { id: "q-korea", type: "question", label: "How did Korea change him?", parent: "f-missionary",
      summary: "Which of his later convictions can be traced to specific experiences in Korea?", status: "open" },

    /* ---------- The Educator ---------- */
    { id: "wts-faculty", type: "event", label: "Westminster faculty", parent: "f-educator", year: 1972, when: "1972–98",
      summary: "Returned to the United States in 1972 and joined the Westminster Theological Seminary faculty.", status: "sourced", sources: ["wiki", "odbu"] },
    { id: "apologetics", type: "event", label: "From apologetics to missions", parent: "wts-faculty", year: 1973, when: "1970s, year to find",
      summary: "Began by teaching apologetics, then moved to missions and became the seminary's first professor of missions.", status: "sourced", sources: ["wiki"] },
    { id: "urban-program", type: "event", label: "Urban Missions Program", parent: "f-educator", year: 1980, when: "start date to find",
      summary: "Directed Westminster's Urban Missions Program, which offered a D.Min. in urban mission, an M.A. in Missiology, and an M.A.R. with an urban focus.", status: "sourced", sources: ["wiki", "odbu"] },
    { id: "um-journal", type: "event", label: "Editor, Urban Mission journal", parent: "f-educator", year: 1983, when: "1983–99 (sources differ)",
      summary: "Edited the journal Urban Mission. Sources give his editorship as either 1983–99 or 1989–99.", status: "verify", sources: ["wiki"] },
    { id: "cuts", type: "event", label: "Center for Urban Theological Studies", parent: "f-educator",
      summary: "A Philadelphia training centre for urban church leaders linked with Westminster. His exact role needs checking.", status: "verify" },
    { id: "lectures", type: "source", label: "Recorded lectures", parent: "f-educator",
      summary: "Westminster keeps recordings of his courses, including series on contextual theology. Listen and take notes in the Listening Room.", status: "sourced", sources: ["wm"] },
    { id: "philadelphia", type: "place", label: "Philadelphia", parent: "wts-faculty", summary: "The city where he taught and where his urban thinking was tested.", status: "sourced" },
    { id: "q-teaching", type: "question", label: "How did he teach?", parent: "f-educator",
      summary: "What did his classroom feel like? What did he assign, and what did he expect of students?", status: "open" },

    /* ---------- His Ideas (ids match the themes in the notebook page) ---------- */
    { id: "urban", type: "theme", label: "The City & Urban Mission", parent: "f-ideas",
      summary: "Why the church must take cities seriously, and how mission changes when it does.", status: "sourced", sources: ["wiki"] },
    { id: "context", type: "theme", label: "Contextualization", parent: "f-ideas",
      summary: "How the unchanging Word meets changing cultures.", status: "sourced", sources: ["wiki"] },
    { id: "trialogue", type: "theme", label: "Trialogue", parent: "context", year: 1984,
      summary: "His proposal that theology, anthropology and mission should be in three-way conversation. The subtitle of Eternal Word and Changing Worlds.", status: "sourced", sources: ["wtsb"] },
    { id: "justice", type: "theme", label: "Evangelism, Justice & Grace", parent: "f-ideas",
      summary: "Holding word and deed together as one witness.", status: "sourced", sources: ["wtsb"] },
    { id: "sinned-against", type: "theme", label: "Sinners and sinned against", parent: "justice",
      summary: "People are both responsible sinners and victims of others' sin. The gospel has to address both.", status: "sourced", sources: ["pca"] },
    { id: "kingdom", type: "theme", label: "The Kingdom of God", parent: "f-ideas",
      summary: "The kingdom as the frame for mission.", status: "verify" },
    { id: "korea-theme", themeId: "korea", type: "theme", label: "Korea & the World Church", parent: "f-ideas",
      summary: "What he learned from churches outside the West.", status: "sourced", sources: ["gal"] },
    { id: "theoed", type: "theme", label: "Theological Education", parent: "f-ideas",
      summary: "Training leaders for the church as it actually is.", status: "sourced", sources: ["gal"] },
    { id: "growth", type: "theme", label: "Church Growth, Examined", parent: "f-ideas",
      summary: "Engaging the church growth movement theologically.", status: "sourced", sources: ["wtsb"] },
    { id: "reformed", type: "theme", label: "Reformed Theology on Mission", parent: "f-ideas",
      summary: "Bringing the Reformed tradition and mission to bear on each other.", status: "verify" },

    /* ---------- His Works: books he wrote ---------- */
    { id: "cwt", type: "work", kind: "book", label: "Contemporary World Theology", parent: "f-works", year: 1973,
      summary: "Contemporary World Theology: A Layman's Guidebook. Presbyterian and Reformed, 1973.", status: "sourced", sources: ["prp"] },
    { id: "bswe", type: "work", kind: "book", label: "Bible Studies on World Evangelization", parent: "f-works", year: 1981,
      summary: "Bible Studies on World Evangelization and the Simple Lifestyle. Presbyterian and Reformed, 1981. Confirm details.", status: "verify" },
    { id: "edj", type: "work", kind: "book", label: "Evangelism: Doing Justice and Preaching Grace", parent: "f-works", year: 1982,
      summary: "Zondervan, 1982. His best-known short book on word and deed.", status: "sourced", sources: ["wtsb", "prp"] },
    { id: "ewcw", type: "work", kind: "book", label: "Eternal Word and Changing Worlds", parent: "f-works", year: 1984,
      summary: "Eternal Word and Changing Worlds: Theology, Anthropology, and Mission in Trialogue. Zondervan, 1984.", status: "sourced", sources: ["wtsb"] },
    { id: "cvum", type: "work", kind: "book", label: "A Clarified Vision for Urban Mission", parent: "f-works", year: 1987,
      summary: "A Clarified Vision for Urban Mission: Dispelling the Urban Stereotypes. Zondervan, 1987.", status: "sourced", sources: ["wtsb"] },
    { id: "acec", type: "work", kind: "book", label: "The American City and the Evangelical Church", parent: "f-works", year: 1994,
      summary: "The American City and the Evangelical Church: A Historical Overview. Baker, 1994.", status: "sourced", sources: ["wtsb"] },
    { id: "um", type: "work", kind: "book", label: "Urban Ministry", parent: "f-works", year: 2001,
      summary: "Urban Ministry: The Kingdom, the City and the People of God. With Manuel Ortiz. InterVarsity Press, 2001. Published after his death.", status: "sourced", sources: ["wtsb"] },

    /* ---------- His Works: volumes he edited ---------- */
    { id: "tpcg", type: "work", kind: "edited", label: "Theological Perspectives on Church Growth", parent: "f-works", year: 1976,
      summary: "Editor. Presbyterian and Reformed, 1976.", status: "sourced", sources: ["prp"] },
    { id: "rtu", type: "work", kind: "edited", label: "Reaching the Unreached", parent: "f-works", year: 1984,
      summary: "Reaching the Unreached: The Old-New Challenge. Editor. Presbyterian and Reformed, 1984.", status: "sourced", sources: ["prp"] },
    { id: "mte", type: "work", kind: "edited", label: "Missions and Theological Education in World Perspective", parent: "f-works", year: 1984,
      summary: "Edited with Samuel F. Rowen. Associates of Urbanus, 1984.", status: "verify" },
    { id: "ucr", type: "work", kind: "edited", label: "Urban Church Research: Methods and Models", parent: "f-works", year: 1985,
      summary: "A collection of readings prepared at Westminster, 1985. Confirm details.", status: "verify" },
    { id: "ih", type: "work", kind: "edited", label: "Inerrancy and Hermeneutic", parent: "f-works", year: 1988,
      summary: "Inerrancy and Hermeneutic: A Tradition, a Challenge, a Debate. Editor. Baker, 1988. Essays by the Westminster faculty.", status: "sourced", sources: ["wtsb"] },
    { id: "ptmc", type: "work", kind: "edited", label: "Practical Theology and the Ministry of the Church", parent: "f-works", year: 1990,
      summary: "Practical Theology and the Ministry of the Church, 1952–1984: Essays in Honor of Edmund P. Clowney. Editor. Presbyterian and Reformed, 1990.", status: "verify", sources: ["prp"] },
    { id: "pguc", type: "work", kind: "edited", label: "Planting and Growing Urban Churches", parent: "f-works", year: 1997,
      summary: "Planting and Growing Urban Churches: From Dream to Reality. Editor. Baker, 1997.", status: "sourced", sources: ["wtsb"] },

    /* ---------- His Works: journal articles ---------- */
    { id: "a-lit", type: "work", kind: "article", label: "Literature and Criticism", parent: "f-works", year: 1960,
      summary: "Westminster Theological Journal 23:1 (November 1960).", status: "sourced", sources: ["gal"] },
    { id: "a-korea", type: "work", kind: "article", label: "Studies in the Theology of the Korean Presbyterian Church", parent: "f-works", year: 1966,
      summary: "An Historical Outline, Parts I–IV. Westminster Theological Journal 29:1 (1966) to 30:2 (1968).", status: "sourced", sources: ["gal"] },
    { id: "a-excellence", type: "work", kind: "article", label: "Theological Education and the Search for Excellence", parent: "f-works", year: 1979,
      summary: "Westminster Theological Journal 41:2 (Spring 1979).", status: "sourced", sources: ["gal"] },
    { id: "a-task", type: "work", kind: "article", label: "The Missionary Task of Theology", parent: "f-works", year: 1983,
      summary: "The Missionary Task of Theology: A Love/Hate Relationship? Westminster Theological Journal 45:1 (Spring 1983).", status: "sourced", sources: ["gal"] },
    { id: "a-feminism", type: "work", kind: "article", label: "Evangelical Feminism", parent: "f-works", year: 1984,
      summary: "Westminster Theological Journal 46:1 (Spring 1984).", status: "sourced", sources: ["gal"] },
    { id: "a-agendas", type: "work", kind: "article", label: "Contextual Theologies: The Problem of Agendas", parent: "f-works", year: 1990,
      summary: "Westminster Theological Journal 52:1 (Spring 1990). Listed in one index only.", status: "verify", sources: ["gal"] },

    /* ---------- His Works: still to be catalogued ---------- */
    { id: "c-editorials", type: "work", kind: "catalogue", label: "Urban Mission editorials & articles", parent: "f-works",
      summary: "He wrote regularly for the journal he edited. None of these are listed here yet.", status: "open" },
    { id: "c-chapters", type: "work", kind: "catalogue", label: "Book chapters & dictionary entries", parent: "f-works",
      summary: "Chapters in other editors' books, and reference-work entries. To be listed.", status: "open" },
    { id: "c-korean", type: "work", kind: "catalogue", label: "Korean-language writings", parent: "f-works",
      summary: "Works written or published in Korean during 1960–72 and after. To be listed.", status: "open" },
    { id: "c-reviews", type: "work", kind: "catalogue", label: "Book reviews & other journals", parent: "f-works",
      summary: "Reviews and articles outside the Westminster Theological Journal. To be listed.", status: "open" },

    /* ---------- His People ---------- */
    { id: "p-ortiz", type: "person", label: "Manuel Ortiz", parent: "f-people",
      summary: "Westminster colleague, co-author of Urban Ministry and co-editor of the volume in Conn's honour.", status: "sourced", sources: ["wtsb"] },
    { id: "p-baker", type: "person", label: "Susan S. Baker", parent: "f-people",
      summary: "Co-editor with Ortiz of The Urban Face of Mission.", status: "sourced", sources: ["wtsb"] },
    { id: "p-keller", type: "person", label: "Timothy Keller", parent: "f-people", year: 1981,
      summary: "Completed his Westminster D.Min. in 1981 under Conn's supervision and later described Conn as a mentor in urban ministry.", status: "sourced", sources: ["tgc", "wiki"] },
    { id: "p-clowney", type: "person", label: "Edmund P. Clowney", parent: "f-people",
      summary: "Westminster president and professor of practical theology. Conn edited the volume of essays in his honour.", status: "verify" },
    { id: "p-vantil", type: "person", label: "Cornelius Van Til", parent: "f-people",
      summary: "Westminster's professor of apologetics when Conn was a student. How far Van Til shaped Conn's approach to culture is worth tracing.", status: "verify" },
    { id: "p-greenway", type: "person", label: "Roger S. Greenway", parent: "f-people",
      summary: "Urban missiologist linked with Westminster and the Urban Mission journal. Check his dates and role.", status: "verify" },
    { id: "p-rowen", type: "person", label: "Samuel F. Rowen", parent: "f-people",
      summary: "Co-editor of Missions and Theological Education in World Perspective.", status: "verify" },
    { id: "p-miller", type: "person", label: "C. John (Jack) Miller", parent: "f-people",
      summary: "Westminster colleague in practical theology. Named alongside Conn and Clowney as an influence on Keller.", status: "verify" },

    /* ---------- My Research: literature about him ---------- */
    { id: "s-ufm", type: "source", kind: "about", label: "The Urban Face of Mission", parent: "f-research", year: 2002,
      summary: "The Urban Face of Mission: Ministering the Gospel in a Diverse and Changing World. Edited by Manuel Ortiz and Susan S. Baker. P&R, 2002. Essays in Conn's honour. Check whether it prints a full bibliography of his writings.", status: "sourced", sources: ["wtsb"] },
    { id: "s-gornik", type: "source", kind: "about", label: "Gornik, tribute and legacy essays", parent: "f-research",
      summary: "Mark R. Gornik wrote on Conn's legacy. Find the exact titles and where they were published.", status: "verify", sources: ["wiki"] },
    { id: "s-ministry", type: "source", kind: "about", label: "“The Ministry of Harvie Conn” (audio)", parent: "f-research",
      summary: "A recording about his ministry in the Westminster Media archive.", status: "sourced", sources: ["wmmin"] },
    { id: "s-hart", type: "source", kind: "about", label: "D. G. Hart's critique", parent: "f-research",
      summary: "Hart argues that Keller's word-and-deed approach draws on Conn's urban missiology. A critical voice to read. Find the original text.", status: "verify", sources: ["wiki"] },

    /* ---------- My Research: questions ---------- */
    { id: "q-biblio", type: "question", label: "Where is the complete bibliography?", parent: "f-research",
      summary: "Check the festschrift, the Westminster library, WorldCat and the Atla database for a full list of his writings.", status: "open" },
    { id: "q-shift", type: "question", label: "Why apologetics to missions?", parent: "f-research",
      summary: "What moved him from teaching apologetics to building a missions department?", status: "open" },
    { id: "q-vantil", type: "question", label: "Van Til and anthropology?", parent: "f-research",
      summary: "How does his use of cultural anthropology relate to the presuppositional apologetics he was trained in?", status: "open" },
    { id: "q-critics", type: "question", label: "Who disagreed with him, and why?", parent: "f-research",
      summary: "On contextualization, on justice, on hermeneutics. What were the strongest objections?", status: "open" },
    { id: "q-legacy", type: "question", label: "What is his lasting influence?", parent: "f-research",
      summary: "Through students, the urban church planting movement, and the Korean church.", status: "open" }
  ],

  edges: [
    { from: "born", to: "calvin", rel: "then" },
    { from: "calvin", to: "wts-student", rel: "then" },
    { from: "wts-student", to: "stratford", rel: "then" },
    { from: "stratford", to: "korea", rel: "then" },
    { from: "korea", to: "wts-faculty", rel: "then" },
    { from: "wts-faculty", to: "retire", rel: "then" },
    { from: "retire", to: "death", rel: "then" },
    { from: "dorothy", to: "korea", rel: "served together in" },
    { from: "dorothy", to: "retire", rel: "her health was a reason for" },
    { from: "wts-student", to: "p-vantil", rel: "studied under" },
    { from: "outreach", to: "sinned-against", rel: "gave rise to" },
    { from: "outreach", to: "justice", rel: "shaped" },
    { from: "korea", to: "korea-theme", rel: "is the source of" },
    { from: "korea", to: "context", rel: "shaped" },
    { from: "a-korea", to: "korea-theme", rel: "develops" },
    { from: "a-korea", to: "korea", rel: "written during" },
    { from: "q-korea", to: "korea", rel: "asks about" },
    { from: "apologetics", to: "q-shift", rel: "raises" },
    { from: "p-vantil", to: "q-vantil", rel: "raises" },
    { from: "context", to: "q-vantil", rel: "raises" },
    { from: "urban-program", to: "urban", rel: "puts into practice" },
    { from: "urban-program", to: "theoed", rel: "puts into practice" },
    { from: "um-journal", to: "urban", rel: "develops" },
    { from: "um-journal", to: "c-editorials", rel: "published" },
    { from: "cuts", to: "theoed", rel: "puts into practice" },
    { from: "cuts", to: "philadelphia", rel: "located in" },
    { from: "lectures", to: "context", rel: "teach" },
    { from: "edj", to: "justice", rel: "develops" },
    { from: "edj", to: "sinned-against", rel: "develops" },
    { from: "ewcw", to: "context", rel: "develops" },
    { from: "ewcw", to: "trialogue", rel: "proposes" },
    { from: "a-task", to: "context", rel: "develops" },
    { from: "a-agendas", to: "context", rel: "develops" },
    { from: "cwt", to: "context", rel: "surveys theology for" },
    { from: "cvum", to: "urban", rel: "develops" },
    { from: "acec", to: "urban", rel: "gives the history of" },
    { from: "pguc", to: "urban", rel: "applies" },
    { from: "ucr", to: "urban", rel: "gives methods for" },
    { from: "um", to: "urban", rel: "sums up" },
    { from: "um", to: "kingdom", rel: "develops" },
    { from: "tpcg", to: "growth", rel: "develops" },
    { from: "rtu", to: "growth", rel: "engages" },
    { from: "mte", to: "theoed", rel: "develops" },
    { from: "a-excellence", to: "theoed", rel: "develops" },
    { from: "ih", to: "reformed", rel: "debates" },
    { from: "bswe", to: "justice", rel: "applies" },
    { from: "p-ortiz", to: "um", rel: "co-wrote" },
    { from: "p-ortiz", to: "s-ufm", rel: "co-edited" },
    { from: "p-baker", to: "s-ufm", rel: "co-edited" },
    { from: "p-rowen", to: "mte", rel: "co-edited" },
    { from: "ptmc", to: "p-clowney", rel: "honours" },
    { from: "p-keller", to: "urban-program", rel: "studied in" },
    { from: "p-keller", to: "q-legacy", rel: "is evidence for" },
    { from: "p-miller", to: "p-keller", rel: "also influenced" },
    { from: "p-greenway", to: "um-journal", rel: "linked with" },
    { from: "p-ortiz", to: "urban-program", rel: "taught in" },
    { from: "s-hart", to: "q-critics", rel: "is evidence for" },
    { from: "s-hart", to: "p-keller", rel: "writes about" },
    { from: "s-ufm", to: "q-biblio", rel: "may answer" },
    { from: "s-gornik", to: "q-legacy", rel: "addresses" },
    { from: "s-ministry", to: "q-character", rel: "may answer" },
    { from: "lectures", to: "q-teaching", rel: "are evidence for" }
  ]
};

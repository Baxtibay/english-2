const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "Bread ______ every day",
    a: "is eaten",
    b: "in",
    c: "since",
    d: "on"
  },
  {
    quostion: "This work ____ tomorrow",
    a: "Will be done",
    b: "last",
    c: "for",
    d: "since"
  },
  {
    quostion: "The exam …… when Jimmy finally found the right room",
    a: "has      already started",
    b: "am speak",
    c: "am speakig",
    d: "can speaking"
  },
  {
    quostion: "Have you ….. been on a school trip ?",
    a: "ever",
    b: "before",
    c: "for",
    d: "yet"
  },
  {
    quostion: "Clare hasn’t finished her homework … ",
    a: "yet",
    b: "already",
    c: "before",
    d: "just"
  },
  {
    quostion: "I think every child should get a good ….. ",
    a: "Mark",
    b: "memory",
    c: "education",
    d: "money"
  },
  {
    quostion: "Could you look …. our rabbit while we’re on holiday ?",
    a: "after",
    b: "for",
    c: "at",
    d: "to"
  },
  {
    quostion: "We can choose our friends, but we can’t choose our ….",
    a: "Relations",
    b: "Strangers",
    c: "Guests",
    d: "Couples"
  },
  {
    quostion: "I read about the accident … the Internet",
    a: "On",
    b: "In",
    c: "At ",
    d: "For"
  },
  {
    quostion: "	10. _____ three languages: French, Spanish, and English",
    a: "I speak",
    b: "I speaking ",
    c: "I’m speaking   ",
    d: "I’m speak "
  },
  {
    quostion: "Where _____ from",
    a: "does Hans come ",
    b: "Hans come ",
    c: "does Hans coming ",
    d: "Hans came"
  },
  {
    quostion: "What _____ tonight",
    a: "are you doing ",
    b: "do you do  ",
    c: "you do  ",
    d: "did you do"
  },
  {
    quostion: "“Where is George” “He _____ a shower.”",
    a: "is having ",
    b: "has ",
    c: "will have ",
    d: "Have"
  },
  {
    quostion: ".“What _____ ?” “I don’t know. Look it up.”",
    a: "does this word mean ",
    b: "means this word ",
    c: "does mean this word ",
    d: "is meaning this word"
  },
  {
    quostion: "“Do you want a cigarette?”“No, thanks. I _____ .”",
    a: "don’t smoke",
    b: "no smoke ",
    c: "smoke not  ",
    d: "am not smoking "
  },
  {
    quostion: "Last year I _____ to America",
    a: "Went",
    b: "was go",
    c: "go ",
    d: "was going"
  },
  {
    quostion: "How long _____ in America ?",
    a: "did you stay ",
    b: "you stay ",
    c: "stayed you ",
    d: "you staying"
  },
  {
    quostion: "The weekend was boring. I _____ anything",
    a: "didn’t do ",
    b: "don’t do ",
    c: "no do ",
    d: "wasn’t doing"
  },
  {
    quostion: "“I’m going to university next year”“What _____ study?”",
    a: "are you going to",
    b: "you going to ",
    c: "do you ",
    d: "did you "
  },
  {
    quostion: "Are you _____ the party?",
    a: "enjoying ",
    b: "enjoy ",
    c: "enjoyed ",
    d: "Enjoys"
  },
  {
    quostion: "How many sisters _____ ?",
    a: "do you have ",
    b: "you have ",
    c: "are you have ",
    d: "do you has"
  },
  {
    quostion: "I _____ understand what you are saying",
    a: "do not",
    b: "didn’t",
    c: "are",
    d: "no"
  },
  {
    quostion: "What time _____ home last night?",
    a: "did you get ",
    b: "you get  ",
    c: "do you get ",
    d: "did you got"
  },
  {
    quostion: "Last weekend I _____ some friends and we _____ a meal",
    a: "saw / had",
    b: "see / having  ",
    c: "saw / have      ",
    d: "seeing / had    "
  },
  {
    quostion: "I _____ English food. It’s wonderful!",
    a: "love ",
    b: "loves",
    c: "loved ",
    d: "am loving "
  },
  {
    quostion: "Pierre is French. He _____ from Toulouse",
    a: "Comes",
    b: "is coming ",
    c: "came ",
    d: "come "
  },
  {
    quostion: "_____ the computer at the moment?",
    a: "Is Mr. Taylor using  ",
    b: "Does Mr. Taylor use  ",
    c: "Did Mr. Taylor use   ",
    d: "Will Mr. Taylor use"
  },
  {
    quostion: "Dave _____ a student with her work now",
    a: "is helping ",
    b: "helped ",
    c: "help ",
    d: "Helping"
  },
  {
    quostion: "“ It’s very noisy”“Suzy _____ to rock music.”",
    a: "is listening",
    b: "listen ",
    c: "listens ",
    d: "listened "
  },
  {
    quostion: "Carol _____ hard for her exam last week",
    a: "didn’t study ",
    b: "isn’t studying",
    c: "don’t study ",
    d: "aren’t study"
  },
  {
    quostion: "Most of the students _____ these days",
    a: "aren’t smoking",
    b: "didn’t smoke ",
    c: "isn’t smoking ",
    d: "don’t smoke"
  },
  {
    quostion: "You look nice, Anne. _____ a new dress?",
    a: "Are you wearing ",
    b: "Do you wear ",
    c: "Does she wear    ",
    d: "Did you wear"
  },
  {
    quostion: "Many birds _____ south every winter",
    a: "fly",
    b: "flew ",
    c: "are flying ",
    d: "will fly"
  },
  {
    quostion: "Usually Jim _____ to work on Saturdays",
    a: "Goes",
    b: "is going ",
    c: "went ",
    d: "go "
  },
  {
    quostion: "Japan _____ many high mountains",
    a: "has ",
    b: "have ",
    c: "is having ",
    d: "are having"
  },
  {
    quostion: "Cats _____ very well in darkness",
    a: "are seeing ",
    b: "see",
    c: "will ",
    d: "sees"
  },
  {
    quostion: "“What _____ ?”“I’m studying computer science.”",
    a: "are you studying ",
    b: "were you studying  ",
    c: "was you studying ",
    d: "is she studying"
  },
  {
    quostion: "“ _____ born?”“I was born in London.”",
    a: "Where were you      ",
    b: "When did you ",
    c: "Where are you ",
    d: "Where do you"
  },
  {
    quostion: "“Are _____?”“No, I’m single.”",
    a: "you married   ",
    b: "he marries ",
    c: "you marry ",
    d: "she married"
  },
  {
    quostion: "“ _____ a job ?”“No, I don’t. I’m a student.”",
    a: "Do you have   ",
    b: "Did you have ",
    c: "Have you had",
    d: "Are you having"
  },
  {
    quostion: "“_____ Liverpool?”“It’s in the north west of England.”",
    a: "Where is ",
    b: "Where were ",
    c: "Where are   ",
    d: "When was"
  },
  {
    quostion: "“What _____?” “My name’s Ben.”",
    a: "is your name ",
    b: "was your name ",
    c: "were your name   ",
    d: "is his name"
  },
  {
    quostion: "“Are _____ your course?”“Yes, I’m enjoying it very much.”",
    a: "you enjoying ",
    b: "they enjoying",
    c: "they enjoyed ",
    d: "enjoying"
  },
  {
    quostion: "“Do _____ clubs?”“I go sometimes.”",
    a: "you go to",
    b: "you do ",
    c: "you usually go ",
    d: "you do go to"
  },
  {
    quostion: "“What_____ doing in you free time?”“I like watching sport on TV.”",
    a: "do you like ",
    b: "are you ",
    c: "sport are you  ",
    d: "would you like to"
  },
  {
    quostion: "“ _____”“Yes, can I help you?”",
    a: "Excuse me",
    b: "Thank you",
    c: "Cheers",
    d: "Nothing much"
  },
  {
    quostion: "“What are you doing this weekend?”“______________.”",
    a: "Nothing much   ",
    b: "Not at all. Don’t mention it      ",
    c: "Cheers ",
    d: "Bye for now"
  },
  {
    quostion: "“Make yourself at home.” “ _____ .”",
    a: "Thank you  ",
    b: "Sleep well ",
    c: "Thanks. Same to you ",
    d: "Excuse me"
  },
  {
    quostion: "“Thank you so much for helping.”“ _____ .”",
    a: "Not at all. Don’t mention it",
    b: "Nothing much ",
    c: "Cheers   ",
    d: "Sleep well"
  },
  {
    quostion: "“Good morning!”“ _____”",
    a: "Good morning! ",
    b: "Thank you !",
    c: "Cheers !",
    d: "Sleep well !"
  },
  {
    quostion: "“See you next week.”“ ___________. “",
    a: "Bye for now",
    b: "Cheers ",
    c: "Thank you",
    d: "Good morning "
  },
  {
    quostion: "“Have a nice day!”“ _____.”",
    a: "Thanks. Same to you ",
    b: "Not at all. Don’t mention it",
    c: "Nothing much ",
    d: "Sleep well"
  },
  {
    quostion: "A- Where _____ from?B- _____ am from Milano",
    a: "are you / I ",
    b: "are / you",
    c: "are they / they",
    d: "you / I"
  },
  {
    quostion: "A- _____ Leo eat Chinese food?B- Yes, he _____ it _____ he was 10",
    a: "Did / ate / when",
    b: "Did / eaten / when",
    c: "Does / ate / what",
    d: "Do / eat / what"
  },
  {
    quostion: "What _____ they going _____ do?",
    a: "are / to",
    b: "are / too ",
    c: "is / to",
    d: "is / too"
  },
  {
    quostion: "A- How _____ languages can your son speak?B- Three _____.",
    a: "many / languages ",
    b: "much / languages",
    c: "many / language",
    d: "much / language"
  },
  {
    quostion: "A- When _____ it _____ raining?B- Yesterday",
    a: "Did / start",
    b: "Did / started",
    c: "Does / start",
    d: "Does / starts "
  },
  {
    quostion: "_____ kind _____ music do you like?",
    a: "What / of ",
    b: "What / * ",
    c: "How / of ",
    d: "What / *"
  },
  {
    quostion: "A- Good night!B - _____!",
    a: "Sleep well",
    b: "Cheers ",
    c: "Fine, thanks ",
    d: "Bye"
  },
  {
    quostion: "Oh! Welcome, Jack! __________.",
    a: "Pleased to meet you ",
    b: "That’s very kind ",
    c: "Make yourself at home ",
    d: "Same to you"
  },
  {
    quostion: "Customer: _______________! Shop assistant: _______________?",
    a: "Excuse me / Yes, can I help you",
    b: "Good morning / Good morning",
    c: "Bless you / Thank you",
    d: "How do you do / How do you do"
  },
  {
    quostion: "A- Thank you very much!B- ___________.",
    a: "Not at all",
    b: "Same to you ",
    c: "Thanks   ",
    d: "Bye "
  },
  {
    quostion: "Mobile phones, televisions, and radios are a means of _____.",
    a: "communication ",
    b: "transport  ",
    c: "media ",
    d: "civilization"
  },
  {
    quostion: "Romans _____ a unique system of the Roman alphabet",
    a: "developed  ",
    b: "improved ",
    c: "persuaded ",
    d: "exchanged"
  },
  {
    quostion: "Nowadays media has a huge influence on the _____.",
    a: "society  ",
    b: "neighbors ",
    c: "printing pressing ",
    d: "Greeks"
  },
  {
    quostion: "We send _____ through the internet",
    a: "an e-mail",
    b: "a letter",
    c: "a fax ",
    d: "mail "
  },
  {
    quostion: "Romans, Greek and Egyptians are all _____ nations.",
    a: "ancient ",
    b: "old ",
    c: "dated ",
    d: "modern"
  },
  {
    quostion: "Where _____ on holidays?",
    a: "do you go",
    b: "you go ",
    c: " do you going ",
    d: " are you go"
  },
  {
    quostion: "In Britain people _____ on the right.",
    a: "drive ",
    b: "are driving ",
    c: "drives ",
    d: "drove"
  },
  {
    quostion: "This is a great party! Everyone _____.",
    a: "is dancing ",
    b: "dance ",
    c: "dances ",
    d: "are dancing"
  },
  {
    quostion: "I was born in Africa _____ 1970",
    a: "in ",
    b: "on ",
    c: "at ",
    d: "last"
  },
  {
    quostion: "My parents moved back to England _____ I was five",
    a: "when ",
    b: "ago ",
    c: "- ",
    d: "for"
  },
  {
    quostion: "We lived in Bristol _____ three years",
    a: "for",
    b: "Last",
    c: "at ",
    d: "-"
  },
  {
    quostion: "I left college three years _____.",
    a: "ago ",
    b: "nothing ",
    c: "for ",
    d: "In"
  },
  {
    quostion: "I found a flat on my own _____ last year",
    a: "-",
    b: "at ",
    c: "for ",
    d: "on"
  },
  {
    quostion: "I usually go home _____ the weekend.",
    a: "at ",
    b: "in ",
    c: "when ",
    d: "of"
  },
  {
    quostion: "I didn’t go home ____ weekend because some friends came to stay",
    a: "last ",
    b: "for ",
    c: "- ",
    d: "at"
  },
  {
    quostion: "They arrived _____ three o’clock _____ the afternoon",
    a: "at / in",
    b: "in / for ",
    c: "when / ago ",
    d: " last / -"
  },
  {
    quostion: "_____ Saturday evening we went out to a concert",
    a: "On",
    b: "Last ",
    c: "In ",
    d: "For "
  },
  {
    quostion: "_____ we got home we listened to some music",
    a: "When",
    b: "For ",
    c: "Last ",
    d: "while "
  },
  {
    quostion: "We got up late _____ Sunday morning",
    a: "on ",
    b: "- ",
    c: "at ",
    d: "In"
  },
  {
    quostion: "_____ the afternoon we went for a walk",
    a: "In",
    b: "At ",
    c: "For ",
    d: "On "
  },
  {
    quostion: "I bought a car a few weeks _____.",
    a: "Ago",
    b: "last ",
    c: "when ",
    d: "for"
  },
  {
    quostion: "I had an accident _____ last night",
    a: "-",
    b: "in ",
    c: "on ",
    d: "At"
  },
  {
    quostion: "It happened _____ seven o’clock _____ the evening",
    a: "at / in",
    b: "when /  - ",
    c: "in / at ",
    d: "at / last "
  },
  {
    quostion: "I took my car to the garage _____ this morning",
    a: "in",
    b: "when ",
    c: "- ",
    d: "at"
  },
  {
    quostion: "It will be ready _____ two weeks",
    a: "in",
    b: "- ",
    c: "on ",
    d: "for"
  },
  {
    quostion: " I _____ a friend while I _____ the shopping",
    a: "met / was doing ",
    b: "was meeting / did ",
    c: " meet / do ",
    d: " met / did"
  },
  {
    quostion: "I _____ for my things when I ____ someone call my name",
    a: "was paying / heard",
    b: "paid / was hearing ",
    c: "pay / heard ",
    d: "was paying / hear "
  },
  {
    quostion: " I _____ round and _____ Paula.",
    a: "turned / saw ",
    b: "was turning/ was seeing ",
    c: "turn / was seeing ",
    d: "was turning / saw"
  },
  {
    quostion: "She _____ a bright red coat yesterday",
    a: "was wearing ",
    b: "wore ",
    c: "wear ",
    d: " was wear"
  },
  {
    quostion: "… a drawing /a photo/a document",
    a: "Scan",
    b: "post",
    c: "surf  ",
    d: "upload"
  },
  {
    quostion: "…. a comment ( on social networking site)",
    a: "Delete",
    b: "Surf",
    c: "Print",
    d: "Enter"
  },
  {
    quostion: "…..a photo/video (onto the internet)",
    a: "Post",
    b: "Print ",
    c: "Delete ",
    d: "Upload "
  },
  {
    quostion: "…..an app/ some software/ a song/ a photo (from the internet)",
    a: "Download ",
    b: "Upload ",
    c: "Surf ",
    d: "Connect to"
  },
  {
    quostion: "….a document / a contact/ a photo (from your computer)",
    a: "Upload",
    b: "Post ",
    c: "Delete ",
    d: "Print "
  },
  {
    quostion: "…..a Wi-Fi network/ the internet",
    a: "Connect to",
    b: "Delete ",
    c: "Print ",
    d: "Post "
  },
  {
    quostion: "….your password/ your contact details",
    a: "Enter ",
    b: "Post",
    c: "Print ",
    d: "Connect to"
  },
  {
    quostion: "….the Web",
    a: "Surf",
    b: "Post ",
    c: "Delete ",
    d: "Scan "
  },
  {
    quostion: "…. a document / a photo",
    a: "Enter",
    b: "Log in",
    c: "Log out",
    d: "Surf "
  },
  {
    quostion: "The computer language for a lot of pages on the internet is",
    a: "HTTP",
    b: "HDML",
    c: "HTML",
    d: "HGTY"
  },
  {
    quostion: "The brain of a computer is the",
    a: "Processor ",
    b: "Motherboard ",
    c: "Hardware ",
    d: "Software "
  },
  {
    quostion: "Making changes to a text is called…",
    a: "Editing",
    b: "Altering ",
    c: "Renewing ",
    d: "Changing"
  },
  {
    quostion: "To get sound from your computer, plug in a pair of…..",
    a: "Loudspeakers",
    b: "Loudhailers ",
    c: "Loudvoices ",
    d: "Loud sounds"
  },
  {
    quostion: "PowerPoint can be used to create presentation….",
    a: "Slideshows",
    b: "Picture shows",
    c: "Exhibitions",
    d: "Pages "
  },
  {
    quostion: "The data and applications on your computer are stored on the ….",
    a: "Hard drive",
    b: "Motherboard ",
    c: "Flash drive",
    d: "Card reader"
  },
  {
    quostion: "ADSL is known as….",
    a: "Broadband",
    b: "Widewand ",
    c: "Wi-Fi",
    d: "Longband "
  },
  {
    quostion: "I can’t use my mobile phone. The battery is….",
    a: "Over ",
    b: "Flat",
    c: "Exhausted ",
    d: "End "
  },
  {
    quostion: "Please ….. the CD ROM",
    a: "Insert",
    b: "Introduce ",
    c: "Inject ",
    d: "Input "
  },
  {
    quostion: "The printer has …. of ink.",
    a: "Run out",
    b: "Finished ",
    c: "Ended ",
    d: "Closed "
  },
  {
    quostion: "Scanners, printers and webcams are….",
    a: "Extras",
    b: "Peripherals",
    c: "Externals ",
    d: "Internals"
  },
  {
    quostion: "Can you remember _____ told you about the new nightclub?",
    a: "Who",
    b: "Which",
    c: "Whose",
    d: "Where"
  },
  {
    quostion: "Carla, _____ parents are from Mexico, was born in the UK",
    a: "Whose",
    b: "Which",
    c: "Who",
    d: "Where"
  },
  {
    quostion: "The film, ____ stars Tom Hanks, is based on a book by Dan Brown.",
    a: "Which",
    b: "Whose",
    c: "Who",
    d: "Where"
  },
  {
    quostion: "Here’s a photo of the hotel ____ we stayed",
    a: "Where",
    b: "Which",
    c: "Whose",
    d: "Who"
  },
  {
    quostion: "I’m thinking of going on a computer _____.",
    a: "Course",
    b: "Qualification",
    c: "Skill",
    d: "Degree"
  },
];

answersDB().forEach((item, index) => {
  console.log(item.a)


  const container = document.createElement('div')
  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})
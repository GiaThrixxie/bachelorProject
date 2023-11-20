const gangrel = {
summary: "The feral Outlanders blend vampire and beast.",
description: "A hunger older than mankind burns inside the wolves. When other Kindred curse their appetites and choose the gilded cage of the city and the leash of social hierarchy, the wolves accept the Beast as a part of themselves and run free. Crossing borders between species, nations, and domains with the ease of perfect predators, they belong to the wild and the wild belongs to them. To think of them as noble savages is perilous, as the animals have little respect for the arrogance of civilization, and only the strongest survive their bloody hunts and savage initiations. Trading stories of war and the secret histories of their kind around campfires lit with the bones of their oppressors, they have turned their backs on the Camarilla and fight tooth and claw to escape the endless plots of their fellow Kindred.",
bane: 'Gangrel relate to their Beast much as other Kindred relate to the Gangrel: suspicious partnership. In frenzy, Gangrel gain one or more animal features: a physical trait, a smell, or a behavioral tic. These features last for one more night afterward, lingering like a hangover following debauchery. Each feature reduces one Attribute by 1 point - the Storyteller may decide that a forked tongue or bearlike musk reduces Charisma, while batlike ears reduce Resolve ("all those distracting sounds"). If nothing immediately occurs to you, the feature reduces Intelligence or Manipulation.The number of features a Gangrel manifests equals their Bane Severity. If your character Rides the Wave of their frenzy you can choose only one feature to manifest, thus taking only one penalty to their Attributes.',
clanDisciplines: [
    {
    title: "Animalism",
    description: "A Gangrel can use Animalism to take on an animal companion, sometimes called a famulus. The animal companion can be used for hunting, spying, and attacking. Some Gangrel will turn pets on their owners, hound vagrants with packs of dogs, or lure strays to them for a quick feeding."
    },
    {
    title: "Fortitude",
    description: "As longtime bodyguards and soldiers for the other clans, the Gangrel have benefited hugely from Fortitude. The Discipline can give them a sense of fearlessness, as it allows them to hunt across harsh terrain and take bullets and knife blades without worry. The Gangrel who emphasize growth in Fortitude likely expects a lot of harm to come their way"
    },
    {
    title: "Protean",
    description: ": Gangrel are known for their mastery of Protean, as few other clans possess its gifts. Straddling the line between vampirism and shapeshifting, the Discipline allows a Gangrel to take on the physical properties of another creature, or in other ways change their physical shape. Gangrel who feed as animals often consider this the truest, or at least the best, of kills."
    },
],
archetypes: [
    {
    title: "Uncaged Jailbird",
    description: "This Kindred spent most of their mortal life in prison or was once incarcerated for a severe crime. Such a past conveys a reputation and a jaded attitude toward authority leavened with a desperate taste for freedom and opportunity to exercise liberties formerly denied them."
    },
    {
    title: "Adventurer",
    description: "The Gangrel are no strangers to the wild, spending much of their time beyond city limits and communing with creatures and clans outside those in the Camarilla. In life and undeath, the adventurer has seen and experienced something few could comprehend. They have walked from place to place, spending their life on the road, living only by wits, a stranger's kindness, and a rich curiosity. This wolf has no fear of the path ahead, wherever it might lead."
    },
    {
    title: "Folk Favorite",
    description: "Clan Gangrel practice the traditions of storytelling around the fire, although they are the furthest from boy scouts. Whether around a burning barrel, tire fire, or at a great convocation, this animal knows the songs and the stories to celebrate the names of fallen heroes and enemies who must never be forgotten. In their mortal lives they might have been singers, entertainers, or independent artists."
    },
    {
    title: "Director of the Board",
    description: "This Gangrel believes in power wielded not merely with physical blows, but through social presence, authority over others, and command of a group of people such as a club or a corporation. The boardroom Gangrel is an alpha who thrives on causing fear and respect, who does not play by the rules, and who is capable of commanding others to perform the most unethical actions with threats of personal and professional losses. They stalk their prey through office corridors at night and in five-star hotels paid by company card."
    },
    {
    title: "Unrepentant Beast",
    description: "The Gangrel relish their animal features and feral natures, and many behave as wild beasts do - leading unlives dominated by immediate physical drives and desires. The unrepentant beast behaved like an animal already before the Embrace. Perhaps they were a predatory criminal or an individual who used legal means to let out their dangerous desires. As a vampire, they are little better."
    },
],
}

const malkavian = {
summary: "The madness of the Lunatics conceals and reveals truths.",
description: 'Psychologists would diagnose the children of Malkav with schizophrenia, depression, obsessive-compulsive disorder, or post-traumatic stress disorder. Sometimes all at once. In reality, they have all of these things and none. Like the "wise madmen" of poetry their derangement stems from seeing too much of the world at once, from understanding too deeply, and feeling emotions that are too strong to bear. They self-medicate with blood, but that is just a temporary solution.',
bane: "Afflicted by their lineage, all Malkavians are cursed with at least one type of mental derangement. Depending on their history and the state of their mind at death, they may experience delusions, visions of terrible clarity, or something entirely different. When the Malkavian suffers a Bestial Failure or a Compulsion, their curse comes to the fore. Suffer a penalty equal to your character's Bane Severity to one category of dice pools (Physical, Social, or Mental) for the entire scene. This is in addition to any penalties incurred by Compulsions. You and the Storyteller decide the type of penalty and the exact nature of the character's affliction during character creation.",
clanDisciplines: [
    {
    title: "Auspex",
    description: "Malkavians use Auspex to enhance their senses, strengthening their sight or hearing to a supernatural level, or to determine a mortal's fears, illusions, and mental weaknesses, so they can play on them horribly as they prepare to feed. Many a Malkavian has persuaded a vessel to \"tell them all about it,\" before draining their weeping victim not ten minutes later."
    },
    {
    title: "Dominate",
    description: "Some Malkavians use Dominate to lift all distractions from a victim's mind, completely enthralling them; others use the Discipline to draw forth or inflict psychoses, through the infamous variant known as Dementation. While some do it mainly for the sake of experimentation, getting into a mortal's head and convincing them that they want to give up their blood greatly assists the clan in surviving night to night."
    },
    {
    title: "Obfuscate",
    description: "The Malkavians do not advertise their use of Obfuscate, conveniently allowing many Kindred to forget they even have access to this Discipline. What they use it for differs vastly. While some Malkavians might want to observe the court from secluded corners or play tricks on their prince, others secrete themselves in the houses, wards, and care homes of the kine, watching the sleeping faces before discreetly feeding."
    },
],
archetypes: [
    {
    title: "Influencing Presence",
    description: "This visionary is addicted to the thrill of reinventing and presenting themselves in different ways, thriving on the attention they get through the stories they tell. They seek to influence others through words, images, or the use of their Disciplines - whether it be for the purpose of pleasure, to forget their problems, or to comply with the whispers of the cobweb. As a mortal they might have had an extended network of followers on social media or led the destructive life of the mythomaniac"
    },
    {
    title: "Medium",
    description: "The ability to sense and register more than any other Kindred afflicts the members of Clan Malkavian with its infamous instability but it can also reward them with great insight. Some find ways to use and benefit from their curse openly without breaching the Masquerade, such as the medium who reveals fictitious or existing spirits attached to objects, areas, and individuals - to help the grieving or for personal gain."
    },
    {
    title: "Bad Analyst",
    description: "Some Malkavians instinctively know how to pick apart and reassemble minds, whatever state they are in. Maybe the analyst was a therapist in life, excelling in helping others through personal crises. Or maybe they use the experiences of their own agonized psyche as a guiding light, prying open the minds of their patients and victims with the purpose of finally healing themselves. The analyst is respected as well as feared for their ability to travel the labyrinth of the mind - and trap another inside it."
    },
    {
    title: "Fanatic",
    description: "alkavians are prone to fanaticism fueled by mental instability. Fanatics each have one purpose that consumes most of their existence. This could be anything from a strong religious or political convictions to an immense passion for detective novels or 9/11 conspiracy theories. Devoted to this one passion, it is safe to say the fanatic knows almost all the details and information there is to obtain about it."
    },
    {
    title: "Pure Blood Addict",
    description: "Defined by bizarre insight and fringe beliefs, many Malkavians feel that certain blood calms their symptoms or derangements. For the blood addict, this has become a constant goal and all they think of. In life, they abused prescription drugs, had hypochondria, or were perhaps a gourmand, and now they cannot help but drink and drink until the gnawing noises quiet down or the anxiety lessens. They know which vessels to pick to obtain the best, most filling blood, and they take every meal seriously."
    },
],
}

const nosferatu = {
summary: "The hideous Sewer Rats hide their disfigured forms in the darkness, from whence they gather secrets.",
description: "For the Nosferatu the Embrace is a journey through abjection, as the Blood of the horror gradually deforms the struggling tissues of the human body into grotesque abominations. Weeks of pain result in deformities similar to terrible birth defects, cancer growths, crippling injuries, and leper-like sores. Those who endure it find themselves as monstrous echoes of Murnau's silver-screen vision. But perhaps pain and humiliation teaches compassion. The Nosferatu, as they jokingly call themselves, are the most humane of the Kindred, wearing their curse on the outside rather than the inside. To blend in, some call on the Blood to wear the borrowed faces of their victims or disappear from sight, while others rely on prosthetics and heavy make-up.",
bane: "Hideous and vile, all Nosferatu count as having the Repulsive Flaw (-2) and can never increase their rating in the Looks Merit. In addition, any attempt to disguise themselves as non-deformed incur a penalty to your dice pool equal to your character's Bane Severity (this includes the Obfuscate powers Mask of a Thousand Faces and Impostor's Guise). Note that most Nosferatu do not breach the Masquerade by just being seen. They are perceived by mortals to be grotesque and often terrifying, but not supernaturally so.",
clanDisciplines: [
    {
    title: "Animalism",
    description: " The Nosferatu treasure the Discipline of Animalism for its utility in increasing their spy network, gaining familiars, allowing the delivery of messages, and granting the ability to suddenly swarm an opponent with a horde of rats, bugs, or birds. Animalism also assists the Nosferatu who wishes to feed from animals - it is often easier, and arguably more moral, to summon a pigeon and drain it than to stalk a mortal and feed from their neck."
    },
    {
    title: "Obfuscate",
    description: "The Nosferatu have mixed opinions on Obfuscate, as the Discipline enables them to blend in with others, but also masquerades that which defines their clan - some Nosferatu are proud of their unconcealed monstrosity, while others take every effort to hide it. Regardless of the controversies, Obfuscate is an excellent tool for hunting and feeding, as few other methods allow a sewer rat to interact with the kine."
    },
    {
    title: "Potence",
    description: "Nosferatu use Potence to rapidly neutralize foes. The Nosferatu understand the merit of hit and run, incapacitating a vessel before feeding and fleeing, or breaking the Anarch Baron's head before vaulting away from their hangout. Many Sewer Rats hesitate to use Potence before the kine, as its unfiltered might opposes their deceptions."
    },
],
archetypes: [
    {
    title: "Information Hub",
    description: "When the Second Inquisition found SchreckNET, many of the Toreador secretly proposed a toast to the collapse of Clan Nosferatu. The clan lost credibility and many members, but those who endured and flourished had mastered the arts of secure archiving, physically and online. They bolstered their existing bonds with contacts and clients, and steadily regained the trust of Kindred who value a central information hub for research and the exchange of secret messages. In an era when contact and movement between domains grow more precarious by each night, Nosferatu like these have become invaluable. If they can guarantee privacy, they can name their price."
    },
    {
    title: "Domain Gumshoe",
    description: "Nosferatu make superb investigators as long as they stick to the shadows and wear plenty of layers. The gumshoe is comfortable stalking the streets, darting from doorway to doorway in the rain, and shows no qualms about breaking into homes, havens, or vaults for that precious last piece of the puzzle. Sometimes recruited as domain sheriffs, this Nosferatu emphasizes research and investigation, preferring to take the thinker's route to most answers over violent means. The domain gumshoe likely comes from law enforcement, was an amateur sleuth, or has an academic background."
    },
    {
    title: "More Animal than Man",
    description: "This Nosferatu identifies more closely with the creatures scurrying beneath the city or flying through the suburbs at night than with the kine wandering the streets. Maybe a former pest controller, vet, or simply an antisocial individual this Kindred speaks to animals, controls them, and likely acts like one. Some Nosferatu do not limit their animalistic urges to behavior but become literal hives for bugs and nests for rats. They reason that their stomach and lower abdominal cavities were being used for little before, and at least the infestation benefits from the vitae."
    },
    {
    title: "Hunter of Monsters",
    description: "Having for so long been associated with animals and isolation, many forget that the Nosferatu can smash through a wall, break a spine, or rip a door off its hingeswith minimal effort. With many of the Brujah and Gangrel gone from the Camarilla, Nosferatu now exercise their capacity for brutality at much higher rates. Often Embraced from criminal or survivalist stock, such Nosferatu suffer little conscience over beating an enemy to ash."
    },
    {
    title: "Rat",
    description: "The comparison of Nosferatu to rats goes further than sewerdwelling and extended incisors. History reveals repeated instances when horrors turned on their masters for their own preservation, betrayed their own for a little extra, or attempted to play both sides of a conflict. The rat may be involved in corporate espionage or claim to be Anarch but scurry to their Camarilla prince at the first sign of trouble. Some rats do what they do just to stay alive and are not beyond sympathy."
    },
],
}

const toreador = {
summary: "The Degenerates seek thrills of art, romance, and cruelty amidst stagnant undeath.",
description: "Cursed by their unbridled sensuality, the divas are obsessed by aesthetic perfection. A fashion model overdosing on a bad batch of heroin, a YouTube clip of a perfectly executed beheading, the dazed eyes of a child who has seen too much, or the reflection of the moon in a pool of blood - these are the kinds of things that make a Toreador lose themselves. They say the first diva finally died in front of their looking glass, unable to tear their gaze away from the image of their face touched by the reflected dawn. But, to dismiss the Toreador as wanton perverts or shallow artists is the last mistake a Kindred will ever make. Beauty is power, and love can make anyone do just about anything. And that is the promise of the Toreador. They can make even the dead feel something raw, something real.",
bane: "Toreador exemplify the old saing that art in the blood takes strange forms. They desire beauty so intensely that they suffer in its absence. While your character finds itself in less than beautiful surroundings, lose the equivalent of their Bane Severity in dice from dice pools to use Disciplines. The Storyteller decides specifically how the beauty or ugliness of the Toreador's environment (including clothing, blood dolls, etc.) penalizes them, based on the character's aesthetics. That said, even devotees of the Ashcan School never find normal streets perfectly beautiful. This obsession with aesthetics also causes divas to lose themselves in moments of beauty and a bestial failure often results in a rapt trance.",
clanDisciplines: [
    {
    title: "Auspex",
    description: "Toreador are ever on the hunt for exquisite experiences and use Auspex to identify the most susceptible vessels and those who might, through their feelings and temperament, offer new tastes and sensations to the drinker during the feed. Toreador also frequently use the Discipline on other Kindred, catering to their desires or antagonizing them with truths they should not know."
    },
    {
    title: "Celerity",
    description: "The Toreador claim they are not combatants, but few move as swiftly as the degenerate using Celerity to cut an opponent to ribbons before they have even had time to draw their weapon. Toreador often use Celerity to enhance artistic or performative skills. In feeding, they use the Discipline to take what they need from a vessel and vanish before the mortal realizes the truth of what has occurred."
    },
    {
    title: "Presence",
    description: "The Toreador master the Discipline of Presence, often using it in concert with Auspex to manipulate the emotions of Kindred and kine. Presence can guarantee an appreciative audience or cause the failure of another artist. Some Toreador will use the Discipline to indulge in carnal pleasures with an unnaturally enthusiastic partner or to lure a vessel into their arms and under their fangs. The members of the clan adore willing vessels, even if the willingness is a supernaturally induced facade."
    },
],
archetypes: [
    {
    title: "L'Artiste",
    description: "The Toreador indulge in the beauty of all art forms and strive to be creators themselves. Whether competent on the strings of the violin, weaving notes as lustrous as the subtle glow of the crescent moon, or wielding a spray-can to form harsh prismatic lines on back-alley walls, this Kindred is an artist revered intensely by their clan."
    },
    {
    title: "Stage Manager",
    description: "Without a puppeteer to pull the strings, the puppet would not know how to dance. This diva's finger is constantly on the pulse of the night. They know every happening at every club and bar worth a visit, and likely have great influence over several such places and the people who go there. Deeply connected to a city's social atmosphere, they have the knowledge to help others gain or lose the spotlight as they please."
    },
    {
    title: "Gadabout",
    description: "With charisma, social intellect, and a cunning smile, the world is yours to conquer. The gadabout hedonist masters the art of manipulation, attraction, and empathy so well that even shy Cainites desire their attention or take pleasure in watching as they effortlessly mingle into every clique and category. This Toreador fits into any profession in which handling customers, patients, or clients is key, and they use every trick in the book to get their targets exactly where they want them."
    },
    {
    title: "Patron of the Arts",
    description: "The patron is a collector of raw talent and promising beauty that just needs a guiding hand. They shape not clay or glass into intricate forms but people, and they see it as their gift to the world to pick out the best before they wither. The patron may pose as an eccentric heiress whose home is open to struggling poets and painters or they may take on the role of the talent scout or critic, aiding their pupils with funding and guidance in return for their blood."
    },
    {
    title: "Thespian Spy",
    description: "The Toreador love a performance, and the one who plays at being a spy knows how to pry valuable chunks of information from a target, often taking more time than they need to properly enjoy the game. Perhaps over-dramatic, yet rarely suspected due to an affable nature, the thespian spy inserts themselves in multiple domains to entertain, observe, and compile libraries of information to exchange for other pleasures."
    },
],
}

const tremere = {
summary: "Broken by a new Inquisition, the once-mighty Warlocks seek to restore their monopoly on sorcerous power.",
description: "A Hermetic mage in eighth century Romania, Tremere was the leader of cabal of magick users rightfully feared for their obsession with knowledge and power. Able to prolong his life unnaturally for centuries, his powers eventually lessened and his grip on youth became shaky. Unable or unwilling to accept his own mortality, Tremere cast his eyes on the hallowed secret of immortality. In his greed, the mage instigated the most terrifying magickal experiments ever conducted, damning himself and his followers to a hell of their own making. Thousands of mortals were murdered and hundreds of Kindred vivisected and drained in ritual circles before Tremere and his cultists thought they had found the elixir of life. How surprised they were to have discovered the curse of Caine. Terrified, they died and woke again to an eternity of unlife and hunger, cut off from their craft.In a mockery of their former magickal rituals, now only fresh blood allows the Tremere to cast their thaumaturgic spells to twist reality.",
bane: "Once the clan was defined by a rigid hierarchy of Blood Bonds reaching from the top to the bottom of the Pyramid. But after the fall of Vienna, their Blood has recoiled and aborted all such connections. Tremere vitae can no longer Blood Bond other Kindred, though they themselves can be Bound by Kindred from other clans. A Tremere can still bind mortals and ghouls, though the corrupted vitae must be drunk an additional number of times equal to the vampire's Bane Severity for the bond to form. Some theorize this change is the revenge of the Antediluvian devoured by Tremere, others attribute it to a simple mutation. Regardless, the clan studies their vitae intently to discover if the process can be reversed, and, indeed, determine if they would want to do so.",
clanDisciplines: [
    {
    title: "Auspex",
    description: "Tremere use Auspex to perceive the auras of others, search for evidence of magical essences and important objects left behind, and to communicate with each other across vast distances without fear of being overheard. When needing to feed, Auspex assists a Tremere looking for a pliable vessel, as they can discern the enthusiastic from the reluctant. Many Tremere use Auspex to determine what a mortal needs in order to be more malleable."
    },
    {
    title: "Blood Sorcery",
    description: "Master thaumaturges, the Tremere's expertise in blood magick makes them a valued, if mistrusted, pillar of the Camarilla. Using Blood Sorcery, they can convey devastating attacks on an opponent's mind and body, defend themselves, and ease their feeding. Some warlocks use Thaumaturgy to sap a mortal's blood from their veins without ever having to touch them."
    },
    {
    title: "Dominate",
    description: "The Tremere will do almost anything for the sake of knowledge and influence, and Dominate is the Discipline that lets them get away with it. Thievery, backstabbing, and the unjust murder of a clan member's ghoul are all made easier by the ability to control a mortal's mind and body. When attempting to feed, a Tremere will show little compunction against using the Discipline to force a mortal into baring their throat."
    },
],
archetypes: [
    {
    title: "Pyramid Loyalist",
    description: "Until recently, the Pyramid hierarchy made the Tremere one of the most rigid clans. They still include a number of conservative loyalists, fiercely bound to the clan's original order by will, if not by blood. A Pyramid loyalist might still adhere to the customs of responsibility between sire and childe, uphold the ranks and tutelage of a formal chantry, and seek to rebuild the clan's prestige and notoriety. Some Pyramid loyalists wish to search Vienna for the remains of their clan's information trove, though Tremere elders have declared the domain out-of-bounds."
    },
    {
    title: "Eternal Scholar",
    description: "This Tremere was a dedicated researcher before their Embrace, and death does nothing to stop them from their obsessive pursuit of knowledge. Even if the clan has always looked to the arcane, the scholar does not need to be a former occultist, but might as well have been a groundbreaking surgeon, a theologist with a taste for sacrilegious texts, or a collector of rare books. Often this Kindred is preoccupied with understanding their own nature, and it is possible they have become an expert on the history of their kind."
    },
    {
    title: "Pagan Nonconformist",
    description: "Other Kindred often style Tremere followers of Carna as \"new agers,\" failing to understand the depth of magical exploration, feminine worship, and liberty these warlocks practice. Whether actually a former Wiccan or Satanist, a prior member of Clan Tremere who has aligned with Carna's rebellion, or just someone who in life was downtrodden and longed for personal autonomy and authority over those who would hurt them, something about this blood witch goes against the grain of the clan's traditions. They speak of change, and excitedly pursue their dreams of forbidden magick."
    },
    {
    title: "Ambitious Outsider",
    description: "The new willingness to Embrace from outside the traditional ranks of academics and occultists brings forth an array of individuals with ideas for the clan and the practice of Thaumaturgy. The ambitious outsider may be a white witch or a rebel destined for the Anarchs. It is likely such a Tremere would struggle to gain respect in the clan, but with a lot to prove and the nominal support of House Carna, the ambitious outsider could go far."
    },
    {
    title: "Chief of Security",
    description: "The Tremere are more than scholars and librarians. The gifts they possess allow them to identify threats, manipulate minds, and destroy aggressors - even after the dissolution of the Pyramid, many other Kindred still regard the usurpers with mistrust, remembering them as the clan of killers and torturers. The Tremere sheriff or chief of security likely inherited their specialized skills from a former life as an enforcer of some kind."
    },
],
}

const ventrue = {
summary: "The aristocratic Blue Bloods enforce the Traditions and the Masquerade on the lesser breeds.",
description: "In their own eyes, only the Clan of Kings has the restraint, the wisdom, the control, and the pedigree to lead their kind through the night. Throughout their time as god-kings of ancient Babylon and lords and ladies of the Dark Ages to their contemporary roles as guardians of royal blood, majority shareholders, and campaign fund backers, they have been obsessed with the impulse to rule. They collect their tithes in the form of precious blood, ensuring the growth of their legacy. While many other clans claim positions of influence in politics and business, no one can rival the Ventrue in the game of pure power and wealth. But lately, their arrogant projections as divinely chosen rulers, better fit to lead than any other clan, have begun to falter. Time is running out. As they feel their privileges slipping through their fingers, the Ventrue tighten their grip and fight fang and claw to remain in control as the masters of their kind.",
bane: "The Ventrue are in possession of rarefied palates. When a Ventrue drinks blood from any mortal outside their preference, a profound exertion of will is required or the blood taken surges back up as scarlet vomit. Preferences range greatly, from Ventrue who can only feed from genuine brunettes, individuals of Swiss descent, or homosexuals, to others who can only feed from soldiers, mortals who suffer from PTSD, or methamphetamine users. With a Resolve + Awareness test (Difficulty 4 or more) your character can sense if a mortal possesses the blood they require. If you want your character to feed from anything but their preferred victim, you must spend Willpower points equal to the character's Bane Severity.",
clanDisciplines: [
    {
    title: "Dominate",
    description: "The Ventrue consider themselves the masters of this Discipline, using it primarily to exert their will on vassals and kine. When feeding, a Ventrue may command a mortal to bare their neck, or use Dominate to erase all memory of a feeding. Ventrue also expertly use this Discipline to protect the Masquerade."
    },
    {
    title: "Fortitude",
    description: "Fortitude enables the Ventrue to keep their thrones even when armies array against them, and to weather every blade, bullet, and bomb. They use the Discipline to feed in adverse situations, physical or otherwise. Where other Kindred might run short on vitae, the Ventrue resist the environment and take their fill."
    },
    {
    title: "Presence",
    description: "The Ventrue seek to tame the court and build the love and devotion of others toward their rule, and Presence is a helpful tool. The Discipline is also used by the Ventrue who wants others to see how easy they acquire vessels. The clan values conservation of time and resources, and Presence allows a hungry blue blood to be efficient when luring their prey."
    },
],
archetypes: [
    {
    title: "Cold-blooded Corporate Director",
    description: "This Ventrue controls a successful corporation, perhaps as the eccentric and reclusive CEO or maybe as an influential silent partner involved in guiding the firm. This Ventrue is always several steps removed from dirtying their hands but will rarely hesitate over ethics if it means getting ahead of the competition."
    },
    {
    title: "Member of the Order",
    description: "The Clan of Kings are well suited visitors in secret societies such as the Freemasons and Rosicrucians. This Ventrue knows how to spin their words. They act as the reclusive leader or an important member of their society, whether it be an informal gentlemen's club, a ladies' guild, an alumni society for magnates and millionaires, or a gathering of concerned citizens clandestinely seeking to control their neighborhood."
    },
    {
    title: "Conservative Politician",
    description: "The kings have always favored conservatism and maintenance of the status quo. The politically inclined blue blood acts as the untouchable spin doctor, lurks in the wings of the party, or advises pundits and newsmen on how to dictate the story. Manipulating the media, they suppress Masquerade breaches with ease."
    },
    {
    title: "Godfather",
    description: "he so-called godfather wields their power through organized crime, manipulating gangs and the path of cash that runs from the streets to the bankers and politicians. Other Ventrue may turn their noses up at such a shady character, but the godfather knows that to get things done, blood sometimes needs to be spilled."
    },
    {
    title: "High Priest",
    description: "The Ventrue have ever venerated their ancestors, both mythical Kindred such as Mithras, Tinia, and Tiamat and historical personages nearly as eminent. This ancestor worship ranges from a historian's thorough study to leading a cult in the ancestor's name. Seeing the touch of their forebears in all that they do, the high priest seeks to repeat history, fulfill the goals of their ancestors, and spread the knowledge of their glory."
    },
],
}

const thinBlood = {
summary: "Born too far from Caine to fully share his curse, the Mercurian thin-bloods must claw their way into the dark world - or find a way out.",
description: "A deteriorated breed, a portent of the end times, or a vampire for a brave new world? Balancing at the midpoint between life and death, the ever-changing nature of the Duskborn evokes pity, jealousy, and fear in equal measure. Survivors of the last decades of pogroms, prejudice, and ostracization, the thin-blooded are here to stay. Their messy street-alchemy and ability to pass as human makes them uniquely suited to thrive outside Kindred society and make their own fate in the post-modern nights.",
characteristics: {
    description: "A thin-blood is created when a 13th or higher generation vampire Embraces a mortal. While formally belonging to the 14th, 15th, or even 16th generation, these classifications mean nothing to the thin-bloods, as they exhibit a wide variety of traits with no connection to their supposed generation. A 14th generation thin-blood may be too weak to even Blood Bond with a mortal, while a 15th might still retain the ability to Embrace, and vice versa. Among the dusk-born, the lines are blurred. Despite this, your thin-blood character is still fundamentally a vampire, and unless otherwise stated follows the same rules as other vampires in this book.",
    data: [
    {
        title: "Blood",
        description: "Thin-bloods cannot create Blood Bonds or perform the Embrace with any certainty. A Rouse Check worth of thin-blood vitae imbues a mortal with ghoul-like powers, but only for a single night.Thin-bloods always have Blood Potency 0."
    },
    {
        title: "Clan",
        description: "A thin-blood is always considered clanless and never suffers any specific clan bane or compulsion."
    },
    {
        title: "Damage",
        description: "Most thin-bloods sustain damage like mortals but mend like vampires. In game terms, they take Aggravated damage not only from fire, but also from slashing and piercing weapons. Impalement with a stake does not paralyze them but instead causes massive physical trauma, likely sending them into torpor. Once damaged, thin-bloods heal according to the rules for other vampires."
    },
    {
        title: "Disciplines",
        description: "Thin-bloods pioneered and practice the art of thin-blood alchemy. This potentially allows them to taste the Disciplines of other Kindred… and to get more than a taste if they can find the vitae to fuel those workings.Additionally, whenever a thin-blood feeds they gain one dot in one Discipline associated with the Resonance of the blood consumed, together with one level one power in that discipline. If the Resonance is Intense or stronger, they gain an additional dot together with a second power. No additional powers can be gained in this way nor can the rating increase with experience. This Discipline lasts until Hunger reaches 5 or the next feeding."
    },
    {
        title: "Hunger and Frenzy",
        description: "A thin-blood suffers hunger just as any vampire. However, the Beast is far less overt, and a thin-blood never frenzies unless provoked by supernatural means (such as Animalism)."
    },
    {
        title: "Life-Like",
        description: "A thin-blood always counts as having used Blush of Life, the exact effects dependant on their Humanity rating."
    },
    {
        title: "Sunlight",
        description: "Thin-bloods take only one level of Superficial damage per turn in direct sunlight. Less direct sunlight causes damage with less frequency. For example, under heavy clouds or if masked and protected by clothing or thick sunscreen, the thin-blood might only sustain damage every third turn or once per minute."
    },
    ],
},
archetypes: [
    {
    title: "Live One",
    description: "This thin-blood is deeply connected to the mortal world, perhaps more so than the Kindred one. They still maintain a family and attempt to hold a job; paying the bills is more important than the whim of some baron they have never met. Ironically, to maintain their human facade, they likely have to lean heavily on the powers in their Blood."
    },
    {
    title: "Weapon of Convenience",
    description: "A former occultist, ghoul, or blood doll, they were close to the Kindred before joining their ranks and knew some of their secrets. This thin-blood was Embraced out of their sire's desperation when backed into a corner, and they were meant to take part in some war or pursue a vengeful dream. Whether they choose to do so or not is up to them. The Embrace released them from their former slavery, and now there is nothing forcing them to do their sire's bidding."
    },
    {
    title: "Guilty Embrace",
    description: "This thin-blood was not Embraced as part of some elaborate plan. A party-goer, a late-night worker walking home alone, or just someone in the wrong place at the wrong time - a vampire fed from them and drank a little too much. Perhaps the Embrace was performed by the drinker as an act of desperate guilt, or perhaps their sire was an onlooker who couldn't bear to watch them die."
    },
    {
    title: "Natural Vampire",
    description: "This thin-blood was destined to become one of the Kindred. As a mortal hunter or a member of Arcanum, they studied the lore of the clans and the myth of Caine and became too fascinated for their own good. Meaning to kill, question, or request the Embrace, they tracked down one of the Kindred. But their sire was a not what was expected by the childe, who is now bitter at the weakness in their veins."
    },
    {
    title: "Redemption Seeker",
    description: "This thin-blood was turned against their will and refuses to accept a place in a world of streetlights and blood. They are recently turned and desperately look for a way to cure their \"condition,\" seeking out rumors of others who have done it as well as weird legends of Golconda and blood transfusions. There is indeed a way, but before they figure it out this thin-blood will try anything and is easy to manipulate by callous Kindred."
    },
],
}







// ANIMALISM
const bondFamulus = {
title: "Bond Famulus",
lvl: 1,
cost: "The animal must be fed the user's Blood on three separate nights, each of which requires a Rouse Check by the user. The amount of Blood needed to sustain the ghoulstate of the animal after this is negligible. Players starting with this power have completed this process and can chose a famulus for free.",
description: "",
duration: "Only death releases a famulus once bound. As long as it receives vampire Blood on a regular basis, the famulus does not age.",
system: "",
dicePools: {
    user: ["charisma", "animalKen"],
}
}

const senseTheBeast = {
title: "Sense the Beast",
lvl: 1,
cost: "Free.",
description: "The vampire can sense the Beast present in mortals, vampires, and other supernaturals, gaining a sense of their nature, hunger, and hostility.",
duration: "Passive.",
system: "Roll Resolve + Animalism vs Composure + Subterfuge. A win allows the user to sense the level of hostility in a target (whether the person is prepared to do harm or even determined to cause it) and determine whether they harbor a supernatural Beast, marking them as a vampire or werewolf. On a win, a critical gives the user information on the exact type of creature (for example, a werewolf), as well as their Hunger (or equivalent) level, and their Resonance. This power can be used both actively and passively, warning the user of aggressive intent in their immediate vicinity.",
dicePools: {
    user: ["resolve", "animalism"],
    target: [
    "composure", "subterfuge"
    ]
}
}

const feralWhispers = {
title: "Feral Whispers",
lvl: 2,
cost: "One Rouse Check per type of animal chosen for the scene. Allows one summoning and unlimited communication. Free when used on famulus.",
description: "The vampire can commune with the beasts of the wild and the city. Feral Whispers allows two-way communication with animals. A cat might not be interested in debating Matisse's use of color but happily discusses the lack of prey around the brownstone building across the street. Depending on the vampire's skill, they can even persuade animals to perform services; like humans, animals seldom agree to things that go against their nature or endanger them. Vampires can also use Feral Whispers to summon a chosen type of animal (see Animalism limitations) but the animals must be present to answer. Nothing prevents a vampire trying to summon an orca in Central Park, but success seems unlikely. Summoned animals listen to the summoner, but scatter or attack if endangered.",
duration: "One Scene.",
system: "Simple communication requires no dice pool test. Persuading an animal to perform a service requires a Manipulation + Animalism roll; the Difficulty depends on the task required. Having a bird keep an eye out for anyone entering the park at night is Difficulty 3, while ordering any animal to defend a place with their lives is Difficulty 6. Summoning animals uses a Charisma + Animalism roll; Difficulty depends on the scarcity of the animals summoned. The number of animals summoned depend on the margin on the test; a critical win summons most, if not all, animals of the type in the area.",
dicePools: {
    user: ["manipulation", "animalism"],
    userAlt: ["charisma", "animalism"],
}
}

const animalSucculence = {
    title: "Animal Succulence",
lvl: 3,
cost: "Free.",
description: "The vampire can slake additional Hunger by feeding on animals. In addition, the vampire can consume its famulus, gaining nourishment far beyond what would be gained from an animal of similar stature and absorbing a sliver of its primary trait.",
duration: "Passive.",
system: "Feeding from animals slakes 1 additional Hunger, and the vampire counts their Blood Potency as two levels lower in regards to penalties to slaking Hunger from animal blood. Consuming one's famulus slakes 4 Hunger, regardless of animal size. This act can never remove the final Hunger die. In addition, consuming one's famulus increases the vampire's Attribute most associated with that animal (as determined by the Storyteller) by two dots. Consuming a cat might raise Dexterity or Composure; consuming a dog might raise Charisma or Resolve. Storytellers may vary the reward from famulus consumption: draining an owl might raise the Attribute in any perception pool by two dots, or in pools involving wise decision making. The bonus lasts until the vampire's next feeding or until their Hunger reaches 5.",
}

const quellTheBeast = {
    title: "Quell the Beast",
lvl: 3,
cost: "One Rouse Check.",
description: "By locking eyes with a target, the vampire cows their inner Beast into temporary slumber. Mortals affected thus become apathetic, unable to take any actions other than to stay alive, while vampires' bestial urges temporarily abate, for better or worse.",
duration: "One scene, or a number of turns equal to the test margin plus one.",
system: " Roll Charisma + Animalism vs Stamina + Resolve. A win against a mortal target incapacitates them for that scene, instilling severe lethargy. They act only to preserve themselves, not against the user or anyone else. A win against a vampire prevents the target from performing Blood Surges. While their Beast is quelled, vampires do not score messy criticals. Against vampires, this power lasts a turn plus a number of turns equal to the win margin on the contest. A critical win against a vampire target also ends their frenzy.",
dicePools: {
    user: ["charisma", "animalism"],
    target: [
    "stamina", "resolve"
    ]
}
}

const unlivingHive = {
    title: "Unliving Hive",
lvl: 3,
cost: "No additional cost.",
description: "Most often seen amongst the Nosferatu, this unnerving power allows the user to extend their animal influence to swarms of insects such as flies or roaches. Certain vampires even go so far as to adopt swarms as famuli, giving them a permanent home within the folds and orifices of their malformed flesh.",
amalgam: {
    discipline: "obfuscate",
    dotAmount: 2
},
duration: "Passive.",
system: "This power extends all powers previously restricted to vertebrates to insect swarms, treating a swarm as a single creature. The vampire can bind the swarm as a famulus, and some even give it the ability to nest inside the cavities of their body. This hides the swarm from sight while allowing it to nurse the minute amounts of Blood needed to sustain it indefinitely. While nested, the swarm is undetectable by anything less than X-rays.Swarms do little damage in combat. They have Health 5 and a pool of 8 dice to resist attacks. Swarms take Superficial damage from Brawl; flame and insecticide cause Aggravated damage. Vampires can use swarms for spying, as distractions (resulting in a two-dice penalty on any roll for a single swarmed individual), or to intimidate mortals (add between one and three dice to Intimidation pools, depending on the type of insect and the victim's phobias). Players and Storytellers can doubtlessly come up with even more creative uses of this power.",
}

const subsumeTheSpirit = {
    title: "Subsume the Spirit",
lvl: 4,
cost: "One Rouse Check. Free if used on famulus.",
description: "The vampire can completely transfer its mind into the body of an animal. They can control the animal and use its senses freely, even during the day should they manage to stay awake. While doing this, the vampire's body lies immobile as if in torpor.",
duration: "A scene / indefinitely if critical win.",
system: "Make a Manipulation + Animalism test; Difficulty 4. On a win, the vampire can inhabit the animal's body for one scene. On a critical win, the vampire can inhabit the animal indefinitely. Extending this possession into the daylight hours requires the vampire to stay awake; seeing the sun requires a test for fear frenzy though the sunlight does not damage the animal being ridden. The user remains oblivious to their original body, but harm to it pulls them out of the trance and releases the animal. Death of the possessed animal also ends the trance, and the vampire takes a point of Aggravated Willpower damage from the shock.",
dicePools: {
    user: ["manipulation", "animalism"],
}
}

const animalDominion = {
    title: "Animal Dominion",
lvl: 5,
cost: "Two Rouse Checks.",
description: "The power the vampire holds over beasts is now great enough to command flocks and packs as if they were extensions of their own body. At a gesture, animals lay down their lives by the dozens, even hundreds, to appease their master.",
duration: " A single scene or until the directive is fulfilled, whichever is shortest.",
system: "Choose a type of animal and make a Charisma + Animalism roll with a Difficulty depending on the nature of the animals and the order given. Getting a flock of crows to disperse and look for a specific individual (given some means of identifying their target) is relatively easy (Difficulty 3), but getting a pack of dogs to give their lives in a suicidal attack on another vampire is more of a challenge (Difficulty 5). The power does not allow the user to summon animals, but compels those already present to obey. The vampire can command the animals to return after completing their task, if they have means to do so.",
dicePools: {
    user: ["charisma", "animalism"],
}
}

const drawingOutTheBeast = {
    title: "Drawing Out the Beast",
lvl: 5,
cost: "One Rouse Check.",
description: "The vampire can project their Beast at the moment of terror or fury frenzy, transferring it into a nearby subject, either mortal or vampire. That person immediately experiences the frenzy instead, going on a merciless rampage or fleeing in terror depending on the trigger.",
duration: "Frenzy duration.",
system: "Instead of the Willpower roll to resist a terror or fury frenzy, roll Wits + Animalism vs Composure + Resolve of the target. If the user fails, they enter frenzy as though they had failed the Willpower roll. On a win, the target experiences that frenzy instead of the user. Later stimuli can still provoke frenzy in the user, but they can use this power as long as they can make Rouse Checks and further targets remain available. This power cannot transfer a hunger frenzy.",
dicePools: {
    user: ["wits", "animalism"],
    target: [
    "composure", "resolve"
    ]
}
}

//AUSPEX
const heightenedSenses = {
    title: "Heightened Senses",
lvl: 1,
cost: "Free, but see System",
description: "The vampire's senses sharpen to a preternatural degree, giving them the ability to see in pitch darkness, hear ultrasonic frequencies and smell the fear of cowering prey.",
duration: "Until deactivated. Having the power active for longer stretches of time without rest (more than a scene), especially so for high-stimulus environments, might necessitate spending Willpower, at the Storyteller's discretion.",
system: "The user adds their Auspex rating to all perception rolls. If exposed to extreme sensations, such as loud bangs, flashes of intense light or overpowering smells while the power is active the user must succeed on a Wits + Resolve (Difficulty 3 or more) roll to dampen their senses in time, or the overload causes them to sustain a -3 dice penalty to all perception-based rolls for the rest of the scene.",
dicePools: {
    user: ["wits", "resolve"],
}
}

const senseTheUnseen = {
    title: "Sense the Unseen",
lvl: 1,
cost: "Free.",
description: "The senses of the vampire become attuned to dimensions beyond the mundane, allowing them to sense presences otherwise hidden from the naked eye. This can be anything from another vampire using Obfuscate to someone using Auspex to spy upon the character to a ghost in the middle of the room. Dormant Blood Sorcery spells and rituals might also be found with this power, at the Storyteller's discretion.",
duration: "Passive.",
system: "Whenever there's something supernatural hiding in plain sight, the Storyteller makes a hidden roll of Wits + Auspex against a Difficulty they choose. Against an entity actively trying to stay hidden, the Storyteller can call for a blind roll (\"Lisa, roll seven dice for me\") as a contest against the target's relevant pool. (For example, detecting a vampire using Obfuscate would be a roll of Wits + Auspex vs Wits + Obfuscate) If the vampire actively searches for a hidden supernatural entity, they roll Resolve + Auspex similarly.",
dicePools: {
    user: ["wits", "auspex"],
    userAlt: ["resolve", "auspex"],
}
}

const premonition = {
    title: "Premonition",
lvl: 2,
cost: "Free or One Rouse Check.",
description: "The vampire experiences flashes of insight. These may take the form of raised hackles, sudden inspiration or even vivid visions. While never too precise, these visions can nudge the vampire out of harm's way or reveal a truth previously overlooked.",
duration: "Passive.",
system: "Whenever the Storyteller deems it appropriate, this power gives the character a sudden hint that aids them in some way: letting them find a clue they've missed or saving them from danger. Whether it gives the character a sudden vision of themselves walking into a trap, an inviting red glow over the second right turn during a chase, or the brief flash of a skeleton beneath the floorboards in the Prince's office, this power always gives the Storyteller license to subtly speed up play or move the story onto a desired track. The suggested limit is one premonition per scene, even if more than one character has Premonition. The user can also actively provoke a premonition by focusing on a subject, making a Rouse Check and rolling Resolve + Auspex. The number of successes rolled determines the level of insight on the subject, if any.",
dicePools: {
    user: ["resolve", "auspex"],
}
}

const scryTheSoul = {
    title: "Scry the Soul",
lvl: 3,
cost: "One Rouse Check.",
description: "By focusing on a person, the vampire can perceive the state of that person's psyche as a shifting aura of colors. Auras reveal little precise information, but do provide clues regarding many subjects, e.g., emotional state, Resonance, and supernatural traits. If looking for a specific condition, the vampire can cursorily scan the crowd to detect it. Such cursory scans provide no further information.",
duration: "One turn, or Storyteller's discretion.",
system: "Make an Intelligence + Auspex vs Composure + Subterfuge roll. On a win, the Storyteller truthfully answers a number of questions equal to the margin of the roll about the target's aura and psyche, including: The emotional state of the subject, The Resonance in the subject's blood, Whether the subject is a vampire, werewolf, ghoul or any other supernatural being, Whether the subject is under the influence of Blood Sorcery or other magic, Whether the subject has committed diablerie in the last year, and a critical win allows discovery of something unexpected, as determined by the Storyteller. If scanning a crowd, roll versus a Difficulty determined by the size of the crowd and external distractions, as well as the type of trait being sought. (Finding the vampire in the living room might only be a Difficulty 3, while finding the most nervous person at a crowded rave is most likely Difficulty 6 or higher.)",
dicePools: {
    user: ["intelligence", "auspex"],
    target: [
    "composure", "subterfuge"
    ]
}
}

const shareTheSenses = {
    title: "Share the Senses",
lvl: 3,
cost: "One Rouse Check.",
description: "By reaching out with their mind, the vampire can tap into the senses of another mortal or vampire, seeing, hearing, and feeling what they do. The user still retains their own perceptions and is still aware of their own surroundings, though the effect requires some getting used to. The user decides whether to tap into only one, some, or all of the target's senses. When used on a stranger this power requires line of sight to initiate. However, it can be used over longer distances on someone who still has some of the user's Blood in their body.",
duration: "One scene.",
system: "Roll Resolve + Auspex at Difficulty 3. This Difficulty can go up depending on distraction, distance, and other factors, such as the amount of the user's Blood that remains in the target. The target usually remains unaware of the intrusion, but Sense the Unseen can allow the passenger to be noticed. To get rid of an unwanted rider, the victim must beat the intruder at a Wits + Resolve vs Wits + Resolve roll. An Auspex user thrown out this way cannot make another Sharing attempt until the next night.",
dicePools: {
    user: ["resolveAuspex", "animalism"],
}
}

const spiritsTouch = {
    title: "Spirit's Touch",
lvl: 4,
cost: "One Rouse Check.",
description: "By touching an inanimate object or the ground at a location, the vampire can sense the emotional residue left by those who have handled that object or visited the location in the past. The user gains insight into not only that person, but also what was done and under what circumstances. While rarely crystal clear, the information often provides leads impossible to gain from regular forensics and deduction.",
duration: "One turn.",
system: "Make an Intelligence + Auspex roll versus a Difficulty depending on the information sought. Gleaning the emotional state of the user of a murder weapon used a few days before is Difficulty 3, but sensing the surroundings in which a 300-year old letter was written approaches Difficulty 6 or higher. Each point of margin on the roll allows the user to sense roughly one additional previous handler and set of circumstances, counting backwards from the most recent.",
dicePools: {
    user: ["intelligence", "auspex"],
}
}

const clairvoyance = {
    title: "Clairvoyance",
lvl: 5,
cost: "One Rouse Check.",
description: "By closing their eyes and entering a light trance, the vampire becomes master of its surroundings. In a few minutes it can gather information from roughly a city-block sized area (more if outdoors or less populated) that would normally take many hours, perhaps days of legwork and investigation. Once connected in such a way to their surroundings the vampire can also receive information on anything happening out of the ordinary in the area.",
duration: "A few minutes for information gathering, up to a night for vigilance-",
system: "Roll Intelligence + Auspex against a Difficulty based on the security and level of activity of the area. Using Clairvoyance on one's own mansion would be Difficulty 3 while an unfamiliar city block in the slums of a major city would amount to 7 or more. The user adds their base Haven rating in extra dice to the pool when using Clairvoyance on their own haven. The Storyteller answers the vampire's questions about the comings and goings in the area, what people have seen and heard, topics of local gossip, recent major shocks or impressions, and so forth. The player can ask roughly one question per point of margin; answers about deliberately concealed information might consume more than one point. A critical win reveals something major, regardless of the questions asked, assuming there is something to reveal.The vampire can also clairvoyantly monitor events in progress, though this requires them to remain in the area for as long as the effect is active.",
dicePools: {
    user: ["intelligence", "auspex"],
}
}

const possession = {
    title: "Possession",
lvl: 5,
cost: "Two Rouse Checks.",
description: "With this power the vampire can strip the will of a mortal and completely possess their body, using it as their own. While the mind of the subject remains hidden to the vampire, they can do anything and go anywhere the subject could while the power remains active. Using this, a vampire can even experience the sunlight, food, and physical sexuality long denied them, their host paying the price for whatever abuse the vampire wreaks on their body while riding interface.",
amalgam: {
    discipline: "dominate",
    dotAmount: 3
},
duration: "Until ended, voluntarily or unvoluntarily.",
system: "This power can only be used on mortals. If the mortal is a ghoul, they must first be Blood Bound to the user. Before possession can begin, the vampire must have eye contact with their victim. The user then engages in a Resolve + Auspex vs Resolve + Intelligence conflict with the victim in order to inhabit their body. If the vampire's player rolls a total failure, the victim becomes immune to further Possession attempts for the duration of the story. Once the vampire inhabits the body of their victim, their own body falls into a torpor-like trance, completely unaware of their surrounding and their own physical state except for Aggravated damage, which breaks the trance and ends the effects. A vampire possessing a mortal can use Auspex, Presence, and Dominate through them. If the user wishes to extend Possession into daytime, they must make a roll to stay awake. Failure to stay awake ends the power. Any Aggravated damage to the subject also risks ending the possession - the user must succeed at a Resolve + Auspex roll (Difficulty 2 + damage taken) to stay in control. If the subject dies during Possession, the resulting spiritual trauma immediately causes the user to sustain three levels of Aggravated damage to Willpower.This power does not give the user the ability to read the mind, use the skills, or emulate the manners of the victim. Any skills employed use the possessing vampire's rating. The user must make a Manipulation + Performance vs Wits + Insight roll to successfully impersonate the victim's manners, expressions, and the like.Finally, Possession violates the victim even more profoundly than a Blood Bond. The Storyteller should consider awarding Stains for this action.",
dicePools: {
    user: ["resolve", "auspex"],
    target: [
    "resolve", "intelligence"
    ]
}
}

const telepathy = {
    title: "Telepathy",
lvl: 5,
cost: "One Rouse Check (plus one Willpower vs non-consenting vampires).",
description: "At the highest levels of Auspex the vampire can now literally read minds, as well as project their own thoughts into the minds of others. While reading a mortal mind is relatively straightforward, undead minds requires a higher effort to penetrate.",
duration: "Roughly one minute per Rouse Check. Increased to a full scene on consenting subjects.",
system: "The user is not required to roll any dice to project their thoughts to another, vampire or mortal, though they do require line of sight. To read the mind of a mortal within line of sight, roll Resolve + Auspex vs Wits + Subterfuge while looking into their eyes. (Unless the mortal consents, in which case no roll is required.) A win means that the user can discern surface thoughts as a stream of images, with higher margin allowing the user to probe for more distant or buried memories. A critical win gives a coherent picture of the subject's current thoughts and intentions. To read the mind of a non-consenting vampire, spend one Willpower point before rolling.",
dicePools: {
    user: ["resolve", "auspex"],
    target: [
    "wits", "subterfuge"
    ]
}
}

//CELERITY
const catsGrace = {
    title: "Cat's Grace",
lvl: 1,
cost: "Free.",
description: "The vampire gains a balance and grace equal to and surpassing world-class trapeze artists. They can walk and even run across ledges and wires effortlessly and can keep their balance on the slimmest of supports.",
duration: "Passive.",
system: "The user automatically passes any Dexterity- or Athletics-based roll needed to keep their balance. Note that this power does not allow them to balance on support that cannot take their weight.",
}

const rapidReflexes = {
    title: "Rapid Reflexes",
lvl: 1,
cost: "Free.",
description: "While their bodies still can't defy the laws of nature, vampires with this power perceive events instantly and can react to them with superhuman alacrity. They can observe incoming projectiles to the extent that they can attempt to dodge arrows and even bullets without available cover.",
duration: "Passive.",
system: "With this power, vampires suffer no penalty to their defense pools for lack of cover against Firearms attacks. They can also take a minor action worth up to two dice per turn, such as readying or reloading a weapon, for free.",
}

const fleetness = {
    title: "Fleetness",
lvl: 2,
cost: "One Rouse Check.",
description: "Their mastery of Celerity now allows the vampire to move and react with dizzying speed.",
duration: "One scene.",
system: "Add the Celerity rating to user's dice pool for non-combat Dexterity tests. Once per turn the user may also do this when defending with Dexterity + Athletics.",
}

const blink = {
    title: "Blink",
lvl: 3,
cost: "One Rouse Check.",
description: "The vampire swiftly closes in on a foe, engaging or escaping in the blink of an eye. To an unprepared observer the user almost appears to teleport, a rush of wind the only sign of their passing.",
duration: "One turn.",
system: ": The vampire moves in a straight line toward a target, covering any distance under 50 meters while still having enough time to perform an action, such as an attack, during the turn. If the terrain is in any way hazardous, the character needs to make a Dexterity + Athletics roll to avoid stumbling and coming to a halt on the way. The Storyteller may call for other contests as desired, especially if the vampire races a distant foe to an object or an action. Vampires engaging a foe with this power act as if already engaged when the turn begins. EXAMPLE: Seo-Hee has Blink, facing an FBI agent 40 meters across hazardous terrain with his Glock 17 out. She wants to get inside the shooter's arc before he can fire. She rolls Dexterity + Athletics vs. the G-man's Dexterity + Firearms. On a win, she can make a Brawl or Melee attack before the Fed can fire. If the agent wins, he can get a shot off at the vampire first, and then she can make a Brawl or Melee attack.",
dicePools: {
    user: ["dexterity", "athletics"],
}
}

const traversal = {
    title: "Traversal",
lvl: 3,
cost: "One Rouse Check.",
description: "With blurring speed the vampire can run or climb along any surface, including vertical and even liquid mediums. While Traversal does not grant insect-like supernatural traction, running up or along walls present little problem. Walking on water remains impossible, but the vampire can run on water for a limited distance given a run-up.",
duration: "One turn.",
system: "Make a Dexterity + Athletics roll with a Difficulty of 3 (inclined surface with traction) to 6 (slick vertical surface, open water), depending on the surface and angle. Each point of margin gets the vampire further up or out; a margin of 0 gets to a close target, a margin of 1 to one farther than that, and so forth. The Storyteller should inform the player beforehand if a target is too distant to even attempt Traversal; as a rule of thumb, anything over water farther than 60 meters (or more than 30 stories up a building) probably exceeds this power's range.",
dicePools: {
    user: ["dexterity", "athletics"],
}
}

const draughtOfElegance = {
    title: "Draught of Elegance",
lvl: 4,
cost: "One Rouse Check.",
description: "The Blood of the vampire becomes saturated with the power of Celerity, conveying a part of that power to anyone who drinks of it. While this is also a first step towards a Blood Bond, already bound thralls or servants have little use for such worries, and even non-bound allies might decide to brave a sip for the sake of temporary power.",
duration: "One night; for vampires, until the next feeding or the vampire reaches Hunger 5.",
system: "Drinking a Rouse Checks worth of Blood directly from the user gifts the drinker with temporary Celerity equal to half the Celerity dots (rounded down) of the donor. The drinker gains the same non-Amalgam powers as the donor's, up to that level.",
}

const unerringAim = {
    title: "Unerring Aim",
lvl: 1,
cost: "One Rouse Check.",
description: "The world around them slowing to a crawl, the vampire can aim and throw or fire any weapon at a target as if the target were stationary.",
amalgam: {
    discipline: "auspex",
    dotAmount: 2
},
duration: "A single attack.",
system: "Use before making a ranged attack. The target makes no roll to dodge or defend; make the attack at Difficulty 1. An opponent possessing Celerity 5 can nullify this power by making their own Rouse Check, defending at the same speed.",
}

const lightningStrike = {
    title: "Lightning Strike",
lvl: 5,
cost: "One Rouse Check.",
description: "Faster than the eye can follow, the vampire can strike with fist or melee weapon at such speed that the opponent is unable to defend or take evasive action.",
duration: "A single attack.",
system: "Use before making a Brawl or Melee attack. The opponent makes no roll to dodge or defend; make the attack at Difficulty 1. An opponent possessing Celerity 5 can nullify this power by making their own Rouse Check, defending at the same speed.",
}

const splitSecond = {
    title: "Split Second",
lvl: 5,
cost: "One Rouse Check.",
description: "The speed at which the vampire moves catches up with their supercharged perception, allowing them to react to events around them at a moment's notice. Ambushers find their prey already standing behind them, and favors asked are completed before the words leave the supplicants mouth.",
duration: "Roughly one action, as determined by the Storyteller.",
system: "The player can supersede the Storyteller's narration of events, within reason. They can choose to have their character move through a door before it closes, circumvent an ambush after it has been triggered, roll out of the way of an explosion, and so forth. The action taken must be reasonable and should not take more than a few seconds in real time. The Storyteller decides what Skills, if any, need to be checked to successfully accomplish an action begun using this power.",
}

//DOMINATE
const cloudMemory = {
    title: "Cloud Memory",
lvl: 1,
cost: "Free.",
description: "By uttering the phrase “Forget!” the user can make the Dominated victim forget the current moment as well as the last few minutes, enough to mask a superficial feeding or a chance meeting. No new memories are formed and if pressed the victim realizes they have a few minutes missing.",
duration: "Indefinitely.",
system: "No roll is required against an unprepared mortal victim. Clouding the memory of a resisting victim or another vampire requires a Charisma + Dominate vs Wits + Resolve roll.",
dicePools: {
    user: ["charisma", "dominate"],
    target: [
    "wits", "resolve"
    ]
}
}

const compel = {
    title: "Compel",
lvl: 1,
cost: "Free.",
description: "With eye contact, the vampire can issue the victim a single-action command, no longer than a short sentence, to be obeyed to the letter. It must be possible to complete the command in a single turn. The Storyteller decides whether to interpret ambiguous commands in an unexpected or unfavorable way; alternatively, the command simply confuses the victim and fails.",
duration: "No more than a single scene.",
system: "No roll is required against an unprepared mortal victim. Commanding a resisting victim, a victim the vampire has previously Dominated in the same scene, or another vampire requires a contest of Charisma + Dominate vs Intelligence + Resolve. Commands that go against the victim's nature also require such a contest.",
dicePools: {
    user: ["charisma", "dominate"],
    target: [
    "intelligence", "resolve"
    ]
}
}

const mesmerize = {
    title: "Mesmerize",
lvl: 2,
cost: "One Rouse Check",
description: "The vampire can issue complex commands to a victim, as long as they have the subject's gaze and relative quiet in which to issue instructions. The instructions must be carried out immediately to the victim's best ability, and must not contain any conditional actions (\"...if you see Henry, give him the document\"), as this would require the victim to exercise cognition.",
duration: "Until the command is carried out or the scene ends, whichever comes first.",
system: "No roll is required against an unprepared mortal victim. Commanding a resisting victim or another vampire requires a contest of Manipulation + Dominate vs Intelligence + Resolve. Commands that go against the victim's nature also require such a contest.",
dicePools: {
    user: ["manipulation", "dominate"],
    target: ["intelligence", "resolve"]
}
}

const dementation = {
    title: "Dementation",
lvl: 2,
cost: "One Rouse Check per scene.",
description: "This subtle power requires nothing more than casual conversation, as the vampire's insidious influence hides between the lines and inflections employed. The victim finds themselves increasingly agitated as their inner demons bubble to the surface, eventually drowning out all rhyme and reason.",
amalgam: {
    discipline: "obfuscate",
    dotAmount: 2
},
duration: "One scene.",
system: "After engaging in conversation with a victim, the user can activate this power. For the duration of the scene, the user may attack a single individual each turn in a Manipulation + Dominate vs Composure + Intelligence conflict, causing Superficial damage to Willpower. A mortal who becomes Impaired by this power experiences a nervous breakdown or psychotic break, the shape and nature of which depends on their personality (and perhaps their blood Resonance). A vampire that becomes Impaired by this power must immediately succumb to a Compulsion, as chosen by the power's user. If the user wants to affect multiple victims, they need to make a separate Rouse Check for each one.",
dicePools: {
    user: ["manipulation", "dominate"],
    target: [
    "composure", "intelligence"
    ]
}
}

const theForgetfulMind = {
    title: "The Forgetful Mind",
lvl: 3,
cost: "One Rouse Check.",
description: "The vampire can rewrite whole swathes of the victim's memories, as long as they can keep the victim's gaze and full, uninterrupted attention. The vampire verbally describes the victim's new memories, which the victim then accepts as their own. This power does not allow the user to investigate the victim's true memories; it more resembles blindly painting over the old canvas.",
duration: "Indefinitely.",
system: ": The user rolls a contest of Manipulation + Dominate vs Intelligence + Resolve. Each point of margin allows the user to add or remove an additional memory. The victim recalls the edits vaguely, foggy ideations that can fall apart under close questioning. A critical win creates a flawless imprint, as real as any true memory.",
dicePools: {
    user: ["manipulation", "dominate"],
    target: [
    "intelligence", "resolve"
    ]
}
}

const submergedDirective = {
    title: "Submerged Directive",
lvl: 3,
cost: "No additional cost.",
description: "When using Mesmerize, the vampire can now implant a posthypnotic suggestion, allowing the command to remain dormant until a specific stimulus occurs. This trigger can be anything from a specific date, to a person (\"When you meet Roland, tell him these words\"), to hearing a specific phrase. The Submerged Directive never expires; people can conceivably walk around with an order buried in their mind for years. The user can only embed one suggestion per victim.",
duration: "Passive.",
system: "As Mesmerize, though the Storyteller might want to make any rolls in secret. There's no way of knowing if the submerged suggestion works until the conditions are met.",
}

const rationalize = {
    title: "Rationalize",
lvl: 4,
cost: "No additional cost.",
description: "The vampire's victims now believe that anything they do under the influence of Dominate was a result of their own free will, and defend their actions, however absurd. Long-term exposure to this power can lead to severe mental trauma in the victim.",
duration: "Indefinitely.",
system: "If pressed on their belief, the victim can make a Wits+Awareness test (Difficulty 5). A win makes them question their own statement, and possibly their sanity.",
}

const massManipulation = {
    title: "Mass Manipulation",
lvl: 5,
cost: "One Rouse Check in addition to the cost of the power amplified.",
description: "The vampire can now command entire gatherings of mortals, and in some cases even groups of vampires. The vampire can use this power both to issue instructions and to manipulate memories.",
duration: "As per power amplified.",
system: "The vampire can amplify any of their other powers to affect a group of people, mortal or vampire, at once. All of the victims need to see the eyes of the user. The user makes any needed roll against the strongest opponent in the group.",
}

const terminalDecree = {
    title: "Terminal Decree",
lvl: 5,
cost: "No additional Hunger cost, but the Humanity cost is potentially severe.",
description: "No longer hampered by the selfpreservation instincts of their victims, the vampire can now issue commands that directly lead to the harm or death of the victim. Mortals can be made to blow their brains out, jump from rooftops, or swallow poison. Vampires can, with a bit of effort, be made to walk into fire or sunlight.",
duration: "Passive.",
system: "Terminal commands now must be resisted (see individual powers regarding rolls involved), rather than failing automatically.",
}

//FORTITUDE
const resilience = {
    title: "Resilience",
lvl: 1,
cost: "Free.",
description: "Endowed with supernatural endurance, the user can strengthen their physical resolve.",
duration: "Passive.",
system: "The user adds their Fortitude rating to their Health track.",
}

const unswayableMind = {
    title: "Unswayable Mind",
lvl: 1,
cost: "Free.",
description: "The user gains a mystical ability to resist any attempts to sway them through mundane charms, coercion, and wiles. Some exhibit Unswayable Mind as zen-like calm, others as supernatural stubbornness.",
duration: "Passive.",
system: "The user adds their dots in Fortitude as extra dice in any roll made to resist coercion, intimidation, seduction, or any other attempt to sway the user's mind against their will. This power also works against supernatural abilities such as Dominate and Presence.",
}

const toughness = {
    title: "Toughness",
lvl: 2,
cost: "One Rouse Check.",
description: "All vampires with this power exhibit an innate ability to ignore damage that would otherwise inconvenience and even disable others of their kind. While this power alone gives no protection against banes and other aggravated damage, the protection it confers adds up in the long run.",
duration: "One scene.",
system: ": Subtract the Fortitude of the defender from all Superficial damage sustained. This occurs before halving the damage, and cannot reduce the damage below one.",
}

const enduringBeast = {
    title: "Enduring Beast",
lvl: 2,
cost: "Free (for famulus); One Rouse Check (for other animals).",
description: "The user shares a small portion of their unnatural toughness with the animals they influence. Teeming swarms and great beasts alike exhibit a resistance to fleeting injuries almost equal to the vampire themself.",
amalgam: {
    discipline: "animalism",
    dotAmount: 1
},
duration: "One scene.",
system: "The vampire can choose to extend some of their Fortitude powers to animals affected by their Animalism. Any animal thus imbued gains additional Health levels equal to the Fortitude dots of the vampire. Using this power on their famulus is free and automatic. To imbue other animals besides their famulus, the user must make a Rouse Check and roll a test of Stamina + Animalism (Difficulty 3). The user can fortify one animal per point of margin. When the effect ends, remove unmarked Health first; this may result in the animal expiring.",
dicePools: {
    user: ["stamina", "animalism"],
}
}

const defyBane = {
    title: "Defy Bane",
lvl: 3,
cost: "One Rouse Check.",
description: "By preparing themselves with an expenditure of power, the vampire can make themselves temporarily resistant to fire and sunlight as well as other grievous wounds that would threaten them with Final Death.",
duration: "One scene or until expired, whichever comes first.",
system: "The user can convert a number of Aggravated damage equal to their Fortitude rating to Superficial damage when sustained. They may not heal that Superficial damage for the rest of the scene. This power converts a number of damage per scene, not per wound or per attack. The user can renew this power once expired by making another Rouse Check. If endangered unexpectedly, the user can activate this power reflexively with a Wits + Survival roll (Difficulty 3) upon receiving Aggravated damage. If the user fails the test, the power does not activate; if they win the test, they must make a Rouse Check to pay for the power. EXAMPLE: Salman has Fortitude 3. During the upcoming brawl, he could for example convert 2 points of Aggravated damage to Superficial, then convert 1 more point of Aggravated damage taken the next turn before his power expires.",
dicePools: {
    user: ["wits", "survival"],
}
}

const fortifyTheInnerFacade = {
    title: "Fortify the Inner Facade",
lvl: 3,
cost: "Free.",
description: "Instead of hardening the vampire's physical frame, this power allows the user to protect their thoughts and emotions from supernatural prying. Their mind appears completely blank while their aura is, for lack of better words, flat.",
duration: "One scene.",
system: "Increases the Difficulty of using Scry Soul (Auspex 3), Telepathy (Auspex 5), and similar powers on the user by half their Fortitude rating (round up). If the rules allow the user to resist these powers, they add their Fortitude rating to their dice pool instead.",
}

const draughtOfEndurance = {
    title: "Draught of Endurance",
lvl: 4,
cost: "One Rouse Check.",
description: "The Blood of the vampire becomes saturated with the power of Fortitude, conveying a part of that power to anyone who drinks of it. This is the Fortitude equivalent of Draught of Elegance",
duration: "One night; for vampires, until the next feeding or the vampire reaches Hunger 5.",
system: "Drinking a Rouse Check's worth of Blood directly from the user gifts the drinker with temporary Fortitude equal to half the Fortitude dots (rounded down) of the donor. The drinker gains the same powers as the donor's, up to that level.",
}

const fleshOfMarble = {
    title: "Flesh of Marble",
lvl: 5,
cost: "Two Rouse Checks",
description: "The power of the Blood causes the skin of the vampire to harden, taking on a marble-like sheen that is still supple but stops almost any blow before momentarily breaking and reforming. A vampire using this power is almost impossible to destroy outright, barring a lucky blow or physical restraint.",
duration: "One scene.",
system: "With this power active, the vampire ignores the first source of physical damage each turn, including fire but not sunlight. If confusion arises about which source is “first,” the Storyteller either decides based on the narrative, or the vampire ignores the most damaging single source that turn. A critical win on an attack roll bypasses this power.",
}

const prowessFromPain = {
    title: "Prowess from Pain",
lvl: 5,
cost: "One Rouse Check.",
description: "Injuries and impairments now only fuel the powers of the vampire, who grows stronger and faster from each blow, rend, or tear received. Only utter destruction can stop one who calls upon this Fortitude power.",
duration: "One scene.",
system: "Upon activating the power the vampire no longer suffers any dice penalties from Health damage sustained, such as physical Impairment. Additionally, they can increase one Physical Attribute by one dot (derived stats are unaffected) for each level of damage on their Health track, aggravated or superficial. The user's Attributes cannot exceed a value equal to their Blood Surge + 6 through this ability. EXAMPLE: Darin has Blood Potency 3, giving him a Blood Surge of 2. He cannot increase his Physical Attributes past 8 using Prowess from Pain.",
}

//OBFUSCATE
const cloakOfShadows = {
    title: "Cloak of Shadows",
lvl: 1,
cost: "Free.",
description: "Standing perfectly still, the user blends into the surroundings. As long as they have some kind of cover, make no sound, and don't move, only mechanical or supernatural means can detect them.",
duration: "One scene.",
system: "Follow the general rules for Obfuscate. The effect lasts until the user moves or they are detected by other means.",
}

const silenceOfDeath = {
    title: "Silence of Death",
lvl: 1,
cost: "Free.",
description: "Popular among the Banu Haqim, this power completely silences the user, nullifying all sound made by them. As with other Obfuscate powers, this only works on people within earshot and does not fool microphones or other electronic sound detectors. Unlike Obfuscate in general, this power works only on the sense of hearing, but in exchange operates more robustly. A vampire needs to make a whole lot of noise to break this silence.",
duration: "One scene.",
system: "The user silences their footsteps, clothing, minor collisions, and other sounds of their person. This makes the vampire undetectable if an observer could only notice them by sound, such as when on a different floor of a house. This power does not eliminate sounds the user makes outside their personal space (throwing or dropping objects, or slamming doors, for example). Failing that, only Sense of the Unseen (Auspex 1) can detect the user.",
}

const unseenPassage = {
    title: "Unseen Passage",
lvl: 2,
cost: "One Rouse Check.",
description: "With this power, the vampire can now move around while staying hidden. The user is functionally invisible, per the usual Obfuscate limitations.",
duration: "One scene or until detection.",
system: "As long as the user emits no overpowering odors and no sound louder than a whisper, this power automatically works. Only if the observer has their attention drawn to the user can they make a detection roll. Sense the Unseen (Auspex 1) can also detect the hidden vampire, as per the general Obfuscate rules. Note that the user cannot use this power to disappear while being actively observed; it automatically fails in such a case.",
}

const ghostInTheMachine = {
    title: "Ghost in the Machine",
lvl: 3,
cost: "No additional cost.",
description: "The user can now transmit the effects of Obfuscate through electronic media, allowing the vampire to appear invisible or masked when viewed live on screen. If an observer views the image later, as in a photograph or recording, the effect lessens: the image seems slightly blurred, making identification hard. In addition, automated surveillance has a tendency to glitch in the presence of the vampire, lessening their chance of being caught by automated systems.",
duration: "Same as power used.",
system: "No additional roll is required when being viewed on a live feed. Treat observers as present with the vampire, with regard to the Discipline. The observer adds +3 to their Difficulty on tests to identify the user on film, video, in photographs, or the like taken during active Obfuscation. The user also gains three additional dice to pools they use when trying to circumvent automated electronic surveillance and countermeasures.",
}

const maskOfAThousandFaces = {
    title: "Mask of a Thousand Faces",
lvl: 3,
cost: "One Rouse Check.",
description: "Instead of disappearing, the vampire using this power can make themselves appear as a nondescript stranger, someone expected to be present in the area. Unlike other Obfuscate powers, this allows the user to interact and communicate with those they might run into. They arouse little suspicion as long as their presence is at all plausible (meaning that it will not fool people who do not expect anyone or would be hostile against anyone they didn't know). The power also does not provide any personal identification or other ways of misleading an identity check.",
duration: "One scene.",
system: "No test is required. Anyone viewing the vampire sees a forgettable face of the same gender and approximate build and height as the user. Clothes take on the same kind of blandness, depending on the environment. At an office the user might appear as a nightwatchman, while they may seem to wear overalls at an assembly plant. Sense the Unseen (Auspex 1) can pierce the power as usual.",
}

const conceal = {
    title: "Conceal",
lvl: 4,
cost: "One Rouse Check.",
description: "This ability allows the user to cloak an inanimate object such as a door, a car, or a small house. As with other Obfuscate powers, this does not actually make the object invisible, but creates a lingering hypnotic effect that causes most people to simply ignore it. In this case the power is especially effective, given that the object is unlikely to call attention to itself. Unless something causes passersby to collide with it or someone points it out, people behave as if the object wasn't there, moving around larger objects if need be.",
amalgam: {
    discipline: "auspex",
    dotAmount: 3
},
duration: "One night, with an additional night per point of margin on the win.",
system: "The vampire touches the object and rolls a test of Intelligence + Obfuscate against a Difficulty from 2 (Concealing a ring in a drawer filled with other memorabilia) to 6 (Concealing a house in the middle of an open square), depending on the target's size and location. The power lasts for one night. Each point of margin on the win conceals the object for an additional night. This power conceals anyone and anything inside the object (e.g., people in a car or shed), as long as the viewer remains outside. This power cannot affect anything larger than a two-story house or any object moving under its own power (such as a moving car). Someone with the Auspex power Sense the Unseen (or equivalent) can notice the object by winning a contest of Wits + Auspex vs the Intelligence + Obfuscate of the user.",
dicePools: {
    user: ["intelligence", "obfuscate"],
},
}

const vanish = {
    title: "Vanish",
lvl: 4,
prerequisite: "cloakOfShadows",
cost: "As per power augmented.",
description: "The vampire can activate Cloak of Shadows and Unseen Passage even while under direct observation. The vampire appears to vanish in the blink of an eye; even the memory of them becomes foggy and indistinct.",
duration: "As per power augmented.",
system: "When vanishing in front of a mortal, roll a contest of Wits + Obfuscate vs Wits + Awareness. On a win, the observer questions whether the vampire was ever there to begin with; their memory clouds on the topic. With a critical win, the vampire vanishes entirely from the observer's memory. This power does not affect vampires' memories, but any win by the user hides them as if they initiated their power unobserved. This power can only be used once per scene.",
dicePools: {
    user: ["wits", "obfuscate"],
    target: [
    "wits", "awareness"
    ]
}
}

const cloakTheGathering = {
    title: "Cloak the Gathering",
lvl: 5,
cost: "One Rouse Check in addition to the cost of the power extended.",
description: "The vampire can shelter their companions under the cloak of Obfuscate.",
duration: "As power extended.",
system: "The vampire can extend their power of Obfuscation to a number of additional willing subjects equal to their Wits, plus one for each additional Rouse Check made. The Obfuscate power used on the group can be any known to the user, and every member of the group count as having used it on themselves, using the Obfuscating vampire's rating as their own when needed for a roll. Members of the group can still perceive each other while under the effects of the power. If anyone besides the user is revealed, either through their own doing or an astute observer, the rest of the group remains hidden. If the user is revealed, so is everyone else.",
}

const impostorsGuise = {
    title: "Impostor's Guise",
lvl: 5,
prerequisite: "maskOfAThousandFaces",
cost: "One Rouse Check.",
description: "With some preparation the vampire can make themselves appear as a specific individual of any build and gender. The user must carefully study the subject, otherwise the charade fails when meeting anyone with more than a casual familiarity with the person being mimicked.",
duration: "One scene.",
system: "The user must study the face to be copied for at least five minutes, from different angles. The user requires another ten minutes of observation to mimic the subject's voice and mannerisms. The user can only copy human appearance, not animal form. The Storyteller then makes a hidden test of Wits + Obfuscate (Difficulty 4). A failure means that the resemblance is less than convincing, and anyone close to the person copied notices something amiss automatically. A win creates a convincing illusion, but the user must make a Manipulation + Performance roll to impersonate speech and mannerisms. A critical win creates a perfect illusion with no further roll necessary. Sense the Unseen (Auspex 1) can pierce the mask as per General Rules.",
dicePools: {
    user: ["wits", "obfuscate"],
    userAlt: ["manipulation", "performance"],
}
}

//POTENCE
const lethalBody = {
    title: "Lethal Body",
lvl: 1,
cost: "Free.",
description: "Using this power, the user is capable of causing horrendous damage to mortals, tearing skin and breaking bones with bare fingers.",
duration: "Passive.",
system: " The user's unarmed attacks can now do Aggravated Health damage to mortals, if desired. They also ignore one level of armor per Potence level of the user.",
dicePools: {
    user: ["wits", "animalism"],
    userAlt: ["composure", "resolve"],
    target: [
    "composure", "resolve"
    ]
}
}

const soaringLeap = {
    title: "Soaring Leap",
lvl: 1,
cost: "Free.",
description: "Possessing unholy strength in more than arms and fists, the user can leap far higher and further than any mortal.",
duration: "Passive.",
system: "The user can jump a number of meters equal to three times their Potence level vertically, and five times their Potence level horizontally. The user needs no run-up to make these leaps.",
}

const prowess = {
    title: "Prowess",
lvl: 2,
cost: "One Rouse Check.",
description: "Vampires with Potence gain far greater strength from their Blood than those who lack it.",
duration: "One scene.",
system: "When activated, add the Potence rating of the user to their unarmed damage value as well as to feats of Strength, and add half their Potence rating (round up) to their Melee damage.",
}

const brutalFeed = {
    title: "Brutal Feed",
lvl: 3,
cost: "Free.",
description: "Known as the “Savage Kiss”, this power allows the user to employ an unholy inner strength when draining a victim. In mere seconds, the attacker swallows torrents of blood while mauling the victim. The result is an efficient, if messy, feeding often employed in the heat of battle where the mangled remains of the victim can be disguised.",
duration: "One feeding.",
system: "The vampire can drain a human completely in seconds, usually within a single turn. Every point of Hunger slaked causes one point of Aggravated Health damage to the victim, as their blood vessels burst and organs bruise and rupture internally. Using Brutal Feed on a vampire does only Superficial Health damage to their dead and inert organs. In combat, Brutal Feed comes immediately after a successful Brawl attack using fangs. The victim first takes bite damage, followed by a number of automatically successful feeding actions up to the user's Potence rating. Against vampires, the number of feeding actions is halved (round down). Armor does not protect against Brutal Feed, as the wounds are, or at least begin as, mainly internal. Of course, armor can protect against the bite itsef as normal. Storytellers may decide such mutilation-killing warrants Stains.",
}

const sparkOfRage = {
    title: "Spark of Rage",
lvl: 3,
cost: "One Rouse Check.",
description: "Combining Potence and Presence, the vampire can incite anger and even frenzy in onlookers, as easily as awe or dread. The user must take care not to rile up an angry mob to turn on them rather than the target or each other.",
amalgam: {
    discipline: "presence",
    dotAmount: 3
},
duration: "One scene.",
system: "When active, the user can add their Potence rating to any attempt to rile or incite a person or a crowd to violence. In addition, the user can activate this power and roll a contest of Manipulation + Potence vs Composure + Intelligence of another vampire. If they win, the opposing vampire must make a fury frenzy test at Difficulty 3.",
dicePools: {
    user: ["manipulation", "potence"],
}
}

const uncannyGrip = {
    title: "Uncanny Grip",
lvl: 3,
cost: "One Rouse Check.",
description: "Focusing their unnatural strength into their toes and fingers, the vampire grips and burrows their extremities into almost any surface, enabling them to climb and even hang otherwise unsupported from walls and ceilings. Close observation reveals telltale scarring or deformation on these surfaces afterward, however, as this is an application of brute force, not superhero-style adhesion.",
duration: "One scene.",
system: " A vampire using this power automatically succeeds on any Skill test to climb a non-metallic surface. The user might also be able to climb copper or bronze cladding or other softer metal surfaces, at the Storyteller's discretion. Thin glass surfaces (though generally not the glass curtain walls of modern office buildings) may shatter under the stress. In the same way, a vampire can hang from a wall or ceiling for up to one scene, though only barefoot vampires can hang by their feet. The climb or clinging leaves obvious tracks detectable by anyone with an Intelligence + Investigation test at Difficulty 2. Detecting Uncanny Grip tracks on glass doesn't even require a roll.",
}

const draughtOfMight = {
    title: "Draught of Might",
lvl: 4,
cost: "One Rouse Check.",
description: "The Blood of the vampire becomes saturated with the power of Potence, conveying a part of that power to anyone who drinks of it. This is the Potence equivalent of Draught of Elegance",
duration: "One night; for vampires, until the next feeding or the vampire reaches Hunger 5.",
system: "Drinking a Rouse Checks worth of Blood directly from the user gifts the drinker with temporary Potence equal to half the Potence dots (rounded down) of the donor. The drinker gains the same powers as the donor's, up to that level.",
}

const earthshock = {
    title: "Earthshock",
lvl: 5,
cost: "Two Rouse Checks.",
description: "Their strength an elemental force, the vampire can slam their fist or foot into the ground, creating a shockwave that throws their opponents prone. One of the more dramatic applications of Potence, this power needs to be carefully employed, lest the user literally bring the house down upon themselves.",
duration: "One use.",
system: "No additional test is needed to create the shockwave. (The ground is hard to miss.) Anyone within a five meter radius of the user must make a Dexterity + Athletics roll (Difficulty 3), with the results below. Anyone prepared for the Earthshock (such as the user's companions) can shift their results up by one step. Critical Win: No effect. Win: Knocked off balance. Lose current action. Failure: Fall prone. Lose current action; must spend a turn getting up. This power causes significant collateral damage. If used on the ground, the earth cracks. If used indoors, furniture breaks and mirrors shatter. On anything but the ground floor the floor might shatter, causing everyone within the radius to plummet to the floor below. This power can only be used once per scene.",
}

const fistOfCaine = {
    title: "Fist of Caine",
lvl: 5,
cost: "One Rouse Check.",
description: "The vampire's bare hands can inflict grievous injuries, lethal to both mortals and other vampires. They can dismember, pierce, impale, decapitate, and even rip a heart out of the chest.",
duration: "One scene.",
system: "For one scene the user can inflict Aggravated Health damage to mortals and supernaturals alike while Brawling, as they literally rend flesh and tear their opponents limb from limb with their bare hands.",
}

//PRESENCE
const awe = {
    title: "Awe",
lvl: 1,
cost: "Free.",
description: "Anyone in the presence of the vampire finds their attention inexplicably drawn to them. Those listening to the vampire speak might suddenly agree on subjects where they once held different viewpoints. While this power doesn't cause rapt infatuation, it is still strong enough to sway the minds of most mortals.",
duration: "One scene or until intentionally ended.",
system: "Add the Presence rating to any Skill roll involving Persuasion or Performance as well as to other Charisma-related rolls, at the Storyteller's discretion. Anyone aware that they're being affected can try to resist with a contest of Composure + Intelligence vs the user's Manipulation + Presence. On a win, the target can resist the effects for one scene; a critical win makes the target immune for the entire night. Once the power wears off, victims revert to their previous opinions.",
dicePools: {
    user: ["manipulation", "presence"],
    target: [
    "composure", "intelligence"
    ]
}
}

const daunt = {
    title: "Daunt",
lvl: 1,
cost: "Free.",
description: "Instead of attracting people, the vampire uses Presence to repel. With this power the user appears threatening and exudes an aura of menace powerful enough to make most mortals avoid their attention and even vampires think twice about acting against them.",
duration: "One scene or until intentionally ended.",
system: "Add the user's Presence rating to any Intimidation rolls. Attacking the user requires a Resolve + Composure roll at Difficulty 2. Vampires cannot use Awe and Daunt simultaneously.",
}

const lingeringKiss = {
    title: "Lingering Kiss",
lvl: 2,
cost: "Free.",
description: "The Kiss of a vampire induces near-ecstasy in the victim, but this power leaves other Kisses in the dust. Victims fed upon by the user are temporarily empowered, but also become addicted to the Kiss - obsessing over it and even seeking the vampire out for repeated feedings. Mortals often become anemic, self-harm, or even die from this addiction. Addicting other vampires is also possible, with the caveat that obsessed vampires demanding to be fed from quickly lead to the user becoming Blood Bound. Once Blood Bound, a vampire becomes unable to use this power on other vampires, being limited to employing it on mortals.",
duration: "A number of nights equal to the user's Presence rating.",
system: "The vampire can choose to use this power during each feeding where they sate at least one Hunger. The victim gains a bonus equal to half the user's Presence (round up) to one Social Attribute of their choice. This benefit lasts for a single night. Once it fades, withdrawal strikes and all the victim's actions not spent working toward acquiring a new fix receive a dice penalty equal to the initial bonus. A victim in withdrawal can spend Willpower to ignore the penalties for a scene, and the penalties go away after a number of nights equal to the user's Presence rating. This power cannot be used on other vampires by a user who is under the thrall of a Blood Bond. Also, vampires with the Unbondable Merit cannot acquire this power.",
}

const dreadGaze = {
    title: "Dread Gaze",
lvl: 3,
cost: "One Rouse Check.",
description: "Briefly exposing their vampiric nature, the user instills a single subject with utter terror. Mortals are cowed, run, or freeze with fear, while other vampires either submit like whipped dogs or flee in frenzied Rötschreck.",
duration: "One turn.",
system: "Displaying their fangs, their face twisted in a predatory grimace, the user rolls a contest of Charisma + Presence against their target's Composure + Resolve. Failure: Mortals are unable to act other than in their own defense, backing off for a turn. Vampires are unaffected. Win: Mortals run in fear. Vampires are unable to act other than in their own defense for a turn unless they spend Willpower equal to the users margin of win (to a minimum of one). Critical Win: Mortals freeze or crumple into a fetal position. Vampires must make a terror frenzy test (Difficulty 3). If they win, they are still affected as above.",
dicePools: {
    user: ["charisma", "presence"],
    target: [
    "composure", "resolve"
    ]
}
}

const entrancement = {
    title: "Entrancement",
lvl: 3,
cost: "One Rouse Check.",
description: "The vampire focuses their unnatural allure on a single person, instilling in them a rapt fascination or infatuation akin to falling head over heels in love or meeting one's lifelong idol. The person affected does their best to remain in the vampire's good graces, but stops short of causing themselves or their other loved ones physical harm.",
duration: "One hour plus one per point of margin.",
system: "The vampire only needs to gain the subject's attention and win a contest of Charisma + Presence vs Composure + Wits. The effect lasts for roughly one hour plus one per point of margin on the win. The vampire can renew this effect indefinitely, but a failure ends the effect and makes the subject immune for the rest of the night. After succeeding, the user adds dice equal to their Presence rating to any Social dice pool against the entranced subject. Requests resulting in obvious harm to the subject or their loved ones, or that oppose the subject's Tenets, fail and require an immediate power contest roll as above, or the Entrancement immediately fails.",
dicePools: {
    user: ["charisma", "presence"],
    target: [
    "composure", "wits"
    ]
}
}

const irresistibleVoice = {
    title: "Irresistible Voice",
lvl: 4,
cost: "No additional cost.",
description: "The Presence of the user becomes a conduit for Dominate. The vampire now only needs their voice to be heard in order to employ Dominate powers.",
amalgam: {
    discipline: "dominate",
    dotAmount: 1
},
duration: "Passive.",
system: "The user's voice alone is now enough to Dominate a target. This does not apply to voices transmitted through electronic media such as phones, television, or apartment door-buzzer speakers.",
}

const summon = {
    title: "Summon",
lvl: 4,
cost: "One Rouse Check.",
description: "The vampire can call to themselves any person, mortal or vampire, upon whom they've previously used Awe, Entrancement, or Majesty, or who has tasted their Blood at least once. The target knows who is summoning them and the user's current location. This calling lasts for a night. After that time, the effect subsides, but the user can repeat it night after night if required to reach the target or if the target is otherwise reluctant. Anyone Summoned feels a pull toward the summoner and tries to reach them, though without endangering themselves physically or financially. They won't sell their house to buy a ticket or miss a vital meeting, but they might skip out of normal work or social commitments.",
duration: "One night.",
system: "The user needs to concentrate for five minutes and think of the person being summoned, then rolls Manipulation + Presence vs Composure + Intelligence. On a win, the target hears the summoning, but may or may not heed it. On a critical win, the target arrives as quickly as possible, barring immediate risk to their well-being.",
dicePools: {
    user: ["manipulation", "presence"],
    target: [
    "composure", "intelligence"
    ]
}
}

const majesty = {
    title: "Majesty",
lvl: 5,
cost: "Two Rouse Checks.",
description: "At this pinnacle of the Discipline the vampire can amplify their countenance to supernatural levels. Whether they appear as heartrendingly beautiful, monstrously terrifying, or wielding absolute command, everyone who views them is struck by their image, unable to act or even speak against the vampire. To experience Majesty is to be in the presence of the divine - or the infernal.",
duration: "One scene.",
system: "People in the presence of the user can only stare, slackjawed, or avert their eyes in fear or submission. Anyone wanting to act in any way in opposition to the user, except for self-preservation, must successfully win a contest of their Composure + Resolve vs. the vampire's Charisma + Presence. A win allows one turn of freedom, plus one per point of margin; only a critical win resists the effect for the entire scene.",
dicePools: {
    user: ["charisma", "presence"],
    target: [
    "composure", "resolve"
    ]
}
}

const starMagnetism = {
    title: "Star Magnetism",
lvl: 5,
cost: "One additional Rouse Check.",
description: "The Presence powers of the user now effect people viewing them on live feeds or hearing them over the phone. Recorded images or messages do not retain the effect, however.",
duration: "Same as power used.",
system: "Awe, Daunt, and Entrancement can be transmitted through live feeds via screens or phones. If Entrancement is used, the victim's name must be spoken clearly, as that power only affects one person at a time. Anyone else viewing the same transmission only finds the user charming, but not supernaturally so.",
}

//PROTEAN
const eyesOfTheBeast = {
    title: "Eyes of the Beast",
lvl: 1,
cost: "Free.",
description: "The vampire can will a supernatural red gleam into their eyes, giving them sight even in the total absence of light.",
duration: "As long as desired.",
system: "No roll is required to activate Eyes of the Beast. While active the user ignores any sight penalties imposed by darkness, including supernatural. While active, the inhuman appearance of the eyes confers two bonus dice to Intimidation pools against mortals.",
}

const weightOfTheFeather = {
    title: "Weight of the Feather",
lvl: 1,
cost: "Free.",
description: "The vampire can reduce their effective mass and density, making themselves almost weightless. This allows them to avoid triggering pressure sensors as well as avoiding major damage from falls, collisions, or being thrown. The power cannot be used for longer leaps, as the vampire's strength is proportionally reduced.",
duration: "As long as desired.",
system: "If the vampire has time to prepare, no roll is required. As a reaction, such as during a sudden fall, activating the power requires a Wits + Survival roll at Difficulty 3. As long as the power is in effect, the vampire is immune to damage from falls, collisions, and being thrown. The user also avoids triggering devices that rely on pressure, at the Storyteller's discretion.",
dicePools: {
    user: ["wits", "survival"],
}
}

const feralWeapons = {
    title: "Feral Weapons",
lvl: 2,
cost: "One Rouse Check.",
description: "The vampire can extend their natural weapons to monstrous proportions. This usually takes the form of fingernails extending into wicked talons but can also come in other forms such as fangs elongating into veritable daggers, as from a gigantic serpent.",
duration: "One scene.",
system: "No skill roll is needed to activate this power. When activated, the vampire's natural weapon of choice becomes a light piercing Brawl weapon with a +2 modifier to damage. Vampiric Bite Attacks still only deal two points of Aggravated damage despite the number of successes, but do not suffer the 1-Success penalty. Superficial damage inflicted by the user's natural weapons is not halved while Feral Weapons is active.",
}

const earthMeld = {
    title: "Earth Meld",
lvl: 3,
cost: "One Rouse Check.",
description: "Becoming one with the soil, the vampire sinks into the earth. Unless in torpor, the vampire rises again the following night.",
duration: "One day or more, or until disturbed.",
system: "No test is required, but the vampire must be on a natural surface: rocks, raw earth, grass, etc. This power does not work on concrete, asphalt, or other artificial surfaces. It takes a turn for the vampire to sink into the earth, leaving carried objects behind atop the soil. While in the earth the vampire is aware of their surroundings, except during day-sleep. At those times, disturbances (e.g., digging or loud noises) awaken them or not as with all vampires.",
}

const shapechange = {
    title: "Shapechange",
lvl: 3,
cost: "One Rouse Check.",
description: "The vampire can assume the shape of an animal roughly the same size as their original mass. The vampire can only change into one type of animal (usually a wolf, sometimes a large feline or a giant snake), usually one associated with their clan or the type of prey they most commonly feed on. The animal, while usually a spectacular example of their species, shows no signs to a mundane observer of being supernatural.",
duration: "One scene unless ended voluntarily before that.",
system: " No test is required. The transformation takes one turn, during which the user may take no other actions. Upon transformation, the vampire gains the Physical Attributes, senses, and native Skills associated with that animal and also gains that animal's natural limits of communication, manipulation (most animals can carry one thing in their mouth), and so forth. The vampire can use other Disciplines, at the Storyteller's discretion. (By and large, they can use Auspex, Animalism, Celerity, Fortitude, Potence, and Protean; many powers of Dominate, Obfuscate, and Presence pose problems; Blood Sorcery is completely off the table.)",
}

const metamorphosis = {
    title: "Metamorphosis",
lvl: 4,
prerequisite: "shapechange",
cost: "One Rouse Check.",
description: "This power grants an additional animal form to the user, this time also enabling them to change their size. Vampires most commonly metamorphose into bats, rats, unusually large insects, or snakes.",
duration: "One scene unless ended voluntarily before that.",
system: "Same as Shapechange.",
}

const mistForm = {
    title: "Mist Form",
lvl: 5,
cost: "One to Three Rouse Checks.",
description: "The vampire gains the legendary power to turn into a cloud of mist, perceivable to the eye but untouchable by anything save fire, sunlight, and supernatural aggression. They can fit through pipes, crevices, and cracks. While strong winds might buffet them, no natural force can disperse the cloud.",
duration: "One scene unless ended voluntarily before that.",
system: "No roll is required. The transformation takes three turns, though it can be sped up with additional Rouse Checks on a one-for-one basis. While in mist form, the vampire moves at walking pace and perceives their surroundings through mystical means as if there as normal. A vampire in mist form cannot make eye contact or speak. They can use only those Disciplines requiring no physical form or presence, at the Storyteller's discretion. While in mist form the vampire can only be damaged by sunlight, fire, and immaterial supernatural attacks (such as some Rituals).",
}

const theUnfetteredHeart = {
    title: "The Unfettered Heart",
lvl: 5,
cost: "Free.",
description: "Having mastered the power of Protean, the very insides of the user become malleable, almost viscous. The heart, seat of the vitae and unlife of the vampire, detaches and moves freely, if sluggishly, within the chest. This makes the vampire exceedingly hard to stake as the position of their heart changes nightly, and can even allow the user to free themselves from paralysis.",
duration: "Passive.",
system: "Increases the Difficulty on any non-combat test to stake the vampire by three. In Melee combat, only if the stake-wielder rolls a critical win does the stake penetrate the user's heart. Even if staked, the user can make a Rouse Check and roll their Strength + Resolve (Difficulty 5) once per hour. A win means they manage to free themselves from paralysis as the stake is pushed out of their body. They cannot attempt such stake expulsion at Hunger 5.",
}






//BLOOD SORCERY
const corrosiveVitae = {
    title: "Corrosive Vitae",
lvl: 1,
cost: "One or more Rouse Checks.",
description: "Altering the properties of some of their own Blood, the user can make it highly corrosive to dead substances, able to corrode most items down to steaming sludge, given enough time and Blood shed.",
duration: "N/A.",
system: "No additional skill roll is required. The user concentrates for a turn and forces Blood through an open, usually self-inflicted, wound. The user then spills their Blood on a nonliving object (except unliving flesh such as that of the Kindred) to corrode and decompose it. Each Rouse Check corrodes approximately 35 cm of matter in all directions from the splash; this takes approximately five minutes (longer on soft metals like copper or cast iron). Harder metals such as alloys and steel merely scar and pit; whether they meaningfully weaken remains at the Storyteller's discretion. (This power might corrode through handcuff chains given enough time and vitae.)",
}

const aTasteForBlood = {
    title: "A Taste for Blood",
lvl: 1,
cost: "Free.",
description: "By tasting a drop of blood, the user can discern certain basic traits of the one to whom it belongs.",
duration: "N/A.",
system: "The user dabs the blood on their tongue and makes a Resolve + Blood Sorcery roll (Difficulty 3). With a win, the user can determine the resonance and intensity of the blood if human. They can also identify whether the blood belongs to a mortal, ghoul, vampire, or other supernatural creature (it may not necessarily be able to identify the supernatural creature if not Kindred or ghoul). Tasting vitae also determines the relative Blood Potency (and thus the likely generation band) of the vampire. A critical win also reveals whether the subject has ever committed diablerie, and the generation (within one) of the vampire. If the user knows of the supernatural creature in question, they can identify the specific supernatural creature on a critical win after tasting the blood.",
dicePools: {
    user: ["resolve", "bloodSorcery"],
}
}

const extinguishVitae = {
    title: "Extinguish Vitae",
lvl: 2,
cost: "One Rouse Check.",
description: "The user can intentionally remove the unlife-giving properties of some of the Blood in another vampire, stoking their Hunger as the victim's inner reserves curdle into impotence.",
duration: "N/A.",
system: "The user rolls a contest of Intelligence + Blood Sorcery vs the Stamina + Composure of a target vampire in line of sight while concentrating for a turn and gesturing subtly. A win increases the target's Hunger by one while a critical win increases it by two. The victim can discern who afflicts them if they can see the user while making an Intelligence + Occult vs Wits + Subterfuge roll.",
dicePools: {
    user: ["intelligence", "bloodSorcery"],
    target: [
    "stamina", "composure"
    ]
}
}

const bloodOfPotency = {
    title: "Blood of Potency",
lvl: 3,
cost: "One Rouse Check.",
description: "The vampire can concentrate their Blood, increasing its potency temporarily.",
duration: "One scene or one night.",
system: "The user makes a Resolve + Blood Sorcery roll against a Difficulty of 2 + their Blood Potency. A win increases their Blood Potency by one for that scene; a critical win increases it by two. The vampire can use this power to exceed their generation limit on Blood Potency during its duration.",
dicePools: {
    user: ["resolve", "bloodSorcery"],
}
}

const scorpionsTouch = {
    title: "Scorpion's Touch",
lvl: 3,
cost: "One or more Rouse Checks.",
description: "The vampire can transmute some of their Blood into a paralyzing poison, capable of affecting mortals and vampires alike. They can use this ichor to coat bladed weapons, or even spit it at a target. Scorpionated Blood incapacitates affected mortals, while hampering vampires if not necessarily rendering them helpless. Specific breathing and biofeedback exercises practiced by some secret societies form the best defense against this Blood, aside from Fortitude.",
duration: "The poison remains potent for one scene.",
system: "The user concentrates for a turn and forces Blood through an open, usually self-inflicted, wound. Each Rouse Check worth of poison made takes a turn and emits enough Blood to coat one bladed melee weapon stickily or to fill one mouthful to be spat at a foe. Spitting poison at someone involves a Dexterity + Athletics attack roll (which can be dodged like any ranged attack), although vampires have been known to French kiss a victim and transfer the poison that way. Even more subtle vampires scorpionate their Blood to poison would-be diablerists: drinking poisoned Blood from the vein guarantees a hit! Aside from such vein-to-fang transmission, however, scorpionated Blood is a contact poison that sublimes away in liquids and is too viscous to inject with a syringe. The user cannot poison beverages with it or (thanks to the pressure differential) inject it by their own bite. Arrowheads and bullets carry too little Blood to use this power with ranged weapons; the effect does not last long enough for the user to fill hollow bullets with scorpionated Blood.If the poison hits, the user rolls a contest of Strength + Blood Sorcery vs Stamina + Occult. (Vampires with Fortitude may resist with Stamina + Fortitude.) If the user wins, the poison does the margin in Aggravated Health damage to mortals and in non-halved Superficial Health damage to vampires. A mortal who takes even one point of damage collapses unconscious.",
dicePools: {
    user: ["strength", "bloodSorcery"],
    target: [
    "stamina", "occult"
    ],
    targetAlt: [
    "stamina", "fortitude"
    ]
}
}

const theftOfVitae = {
    title: "Theft of Vitae",
lvl: 4,
cost: "One Rouse Check.",
description: "Through mystical means the vampire opens a wound in a major artery of a mortal victim, blood shooting out through the air in a stream toward the open mouth of the user. This has the additional effect of keeping the mortal subdued as if in the throes of the Kiss, and the wound closes by itself once the effect ends, whether the victim expired or not. This power is extremely spectacular and a potential Masquerade breach while in progress, but once ended leaves no traces.",
duration: "One feeding.",
system: "The user makes a beckoning gesture toward a mortal target in line of sight and rolls their Wits + Blood Sorcery vs Wits + Occult. A win opens an arterial wound, and the vampire can start feeding from across the room. (A target wearing full-body protection such as a hazmat suit merely bleeds ecstatically out into the suit.) The user can do nothing else while feeding, but they can feed at twice the normal speed (at triple speed on a critical win) thanks to the sorcerous pressure of this power.",
dicePools: {
    user: ["wits", "bloodSorcery"],
    target: [
    "wits", "occult"
    ]
}
}

const baalsCaress = {
    title: "Baal's Caress",
lvl: 5,
cost: "One or more Rouse Checks.",
description: "The vampire can transmute their Blood into an extremely aggressive poison, lethal to mortal and Kindred alike.",
duration: "The poison remains potent for one scene.",
system: "This power uses the same system (and its poison has the same restrictions) as Scorpion's Touch, with increased damage. If the poison hits, the user rolls a contest of Strength + Blood Sorcery vs Stamina + Occult. (Vampires with Fortitude may resist with Fortitude in lieu of the Occult Skill.) If the user wins, the poison does the margin in Aggravated Health damage to mortals and vampires alike. A mortal who takes even one point of damage dies instantly. If a vampire target takes Aggravated damage from this poison, the user rolls the contest again; on a win, the vampire enters torpor when next they go to sleep.",
dicePools: {
    user: ["strength", "bloodSorcery"],
    target: [
    "stamina", "occult"
    ],
    targetAlt: [
    "stamina", "fortitude"
    ]
}
}

const cauldronOfBlood = {
    title: "Cauldron of Blood",
lvl: 5,
cost: "One Rouse Check and gain one (or more) Stains.",
description: "This gruesome power lets the user boil the blood of a victim in their own veins, causing massive damage and excruciating pain. While there are more efficient ways to kill, few methods approach this level of cruelty.",
duration: "One turn.",
system: "The user pays the cost and touches the victim (Dexterity + Athletics in combat or similar situations), rolling a contest of Resolve + Blood Sorcery vs Composure + Occult. (Vampires with Fortitude may resist with Composure + Fortitude.) On a win, each point of margin causes one point of Aggravated damage in the victim. Mortals taking at least one point of damage die screaming. Vampire victims add 1 Hunger per point of damage inflicted, until Hunger is at 5.",
dicePools: {
    user: ["resolve", "bloodSorcery"],
    target: [
    "composure", "occult"
    ],
    targetAlt: [
    "composure", "fortitude"
    ]
}
}

//RITUALS
const bloodWalk = {
    title: "Blood Walk",
lvl: 1,
description: "This Ritual expands upon the power A Taste for Blood allowing the user to learn more details about the subject studied, assuming the subject is a vampire.",
ingredients: "A silver cup filled with Blood from the subject. (One Rouse Check's worth).",
process: "The user mixes their Blood with the subject's and repeats an incantation over the cup, spending an roughly an hour.",
system: "A win on the Ritual roll (see General Systems) allows the user to learn the generation and name of the subject as well as the subject's sire. A Critical Win also informs the user of any Blood Bonds active on the subject, as regnant or thrall.",
}

const clingingOfTheInsect = {
    title: "Clinging of the Insect",
lvl: 1,
description: "The vampire gains the ability to cling to walls like a grotesque insect or spider.",
ingredients: "A living spider.",
process: "The caster fills a vial with their own Blood and crushes the spider into it, mixing the ground bits with the Blood before ingesting it. (This does not refund any Hunger gained.) The caster can only perform this ritual on themselves; others gain no benefit from drinking the mixture.",
system: "A successful Ritual yields the ability to cling to walls and ceiling for a scene, while a critical win extends the duration to a whole night. The caster must cling to the surface with both hands and feet; they move at approximately half their usual rate.",
}

const craftBloodstone = {
    title: "Craft Bloodstone",
lvl: 1,
description: "This Ritual results in a Bloodstone, a magical tracker to which the caster always knows the direction as well as general distance. As the Camarilla retreats from modern technology, this previously neglected Ritual has seen a resurgence in use.",
ingredients: "A pebble of iron ore or a small magnet and a liter of blood from any source in a silver bowl.",
process: "The user spills their Blood into the blood in the bowl and then recites a chant over it for an hour, repeating the chant over the next two nights. The pebble (or magnet) absorbs the blood over the three nights; upon successful completion, the liquid appears translucent.",
system: " Make the Ritual roll at the end of the third night. On a win the caster attunes their mind to the Bloodstone. The caster can unerringly sense the direction and distance to the stone. This effect lasts until the Bloodstone is destroyed or a week has passed. A caster can have and keep track to a number of stones up to their Resolve.",
}

const wakeWithEveningsFreshness = {
    title: "Wake with Evening's Freshness",
lvl: 1,
description: "Performed before dawn, this ritual allows the caster to awake at any sign of danger, fully alert as if awake during the night.",
ingredients: "The burnt bones and feathers of a rooster.",
process: "The caster mixes the ashes with their own Blood, drawing a circle with the mixture around their place of sleep.",
system: "Do not make a Ritual roll unless true danger appears. If the caster is threatened during the day, make the Ritual roll then, with the caster rousing on a win. For the duration of the scene the vampire ignores the daytime penalties for staying awake. On a critical win, the effects last until the following dawn.",
}

const wardAgainstGhouls = {
    title: "Ward against Ghouls",
lvl: 1,
description: "Wary Tremere created this ritual to protect themselves from the minions of vengeful rivals. This ward uses the standard rules for Wards.",
ingredients: "Nothing apart from the usual requirement of the caster's Blood.",
}

const communicateWithKindredSire = {
    title: "Communicate with Kindred Sire",
lvl: 2,
description: "The caster uses the bond between sire and childe to open a bridge between minds, allowing the childe to create a telepathic link for the purpose of long-distance communication. As with some other Rituals, this one sees a resurgence in these nights of wiretaps and electronic surveillance.",
ingredients: "An object previously possessed by the sire and a silver bowl filled with clear water.",
process: "The caster submerges the object in water and lets their Blood drip into the bowl, concentrating upon the last memory of their sire for up to 30 minutes.",
system: "Make the ritual roll after 15 minutes have passed. A win allows for ten minutes of two-way silent mental communication once 15 more minutes have passed. A critical win allows immediate communication. Any major disturbance on either end breaks the connection.",
}

const eyesOfBabel = {
    title: "Eyes of Babel",
lvl: 2,
description: "By ingesting the tongue and an eye of a person the caster gains the ability to read and speak any language known by the victim.",
ingredients: "A fresh eye and tongue of a person.",
process: "Plucking the ingredients fresh from the victim, the vampire chews and swallows them. (This most likely incurs a Stain.)",
system: "The Rouse Check required for this ritual allows for the supernatural dissolution of the ingredients once swallowed. Once this is done, make the Ritual roll. A win gives the caster the ability to read and speak any language known by the victim, at the same skill level for a week. A critical win extends the duration to a month.",
}

const illuminateTheTrailOfPrey = {
    title: "Illuminate the Trail of Prey",
lvl: 2,
description: "The ritual allows the caster to perceive the previous whereabouts of a designated person as a subtly glowing trail, visible only to them.",
ingredients: "A white satin ribbon.",
process: "The performer of the ritual soaks the ribbon in their own Blood, setting it alight.",
system: "If the Ritual roll is a win the ribbon catches fire despite being wet, burning fiercely like a fuse. Once consumed, the ritual takes effect. While the ritual remains active, the caster can follow faint traces of the target even in areas where they left no tracks, such as crowded cities. To follow the tracks, the caster makes an Intelligence + Survival roll against a Difficulty equal to 6 minus the margin on the ritual test. The target must be known by face by the caster, who sees the path travelled by the victim over the previous 24 hours. The path remains visible for the entire night; a critical win extends this to two nights.",
}

const truthOfBlood = {
    title: "Truth of Blood",
lvl: 2,
description: "Until recently known only to Banu Haqim viziers, this Ritual creates a mystic potion capable of sifting lies from truth. This Ritual has power enough even to sometimes uncover facts unknown to the speaker.",
ingredients: "One pint of blood from the subject.",
process: "The performer of the Ritual mixes their own Blood with that of the subject in a vessel large enough to allow for the dipping of the finger.",
system: "Instead of the regular Ritual roll, the caster immerses their finger in the mixture and makes a Resolve + Blood Sorcery vs Composure + Occult roll for every statement made by the subject. The first failed contest ends the Ritual. A Win tells them whether that statement is true, as far as the subject knows. On a critical win by the caster, the subject involuntarily expands upon their answer, providing more information, including details they glancingly saw or subconsciously forgot. (The Storyteller should inform the caster if there is no more information about that topic.) The mixture bubbles and seethes during the process, turning completely to ash at the end of the scene. This Ritual cannot pierce Cloud Memory, the Forgetful Mind, or other memory-wiping powers. The caster may well guess the cause of a blank or foggy recollection, but cannot recover the actual memory.",
dicePools: {
    user: ["wits", "animalism"],
    userAlt: ["composure", "resolve"],
    target: [
    "composure", "resolve"
    ]
}
}

const wardAgainstSpirits = {
    title: "Ward against Spirits",
lvl: 2,
description: "This Ritual wards an item against incorporeal beings suchs as wraiths, ghosts, and elemental spirits. Any attempt by them to manipulate or pass through the item triggers the effect. This ward uses the standard rules for Wards.",
ingredients: " A handful of salt (in some versions, a handful of brick dust) mixed with the Blood.",
}

const wardingCircleAgainstGhouls = {
    title: "Warding Circle against Ghouls",
lvl: 2,
description: "This Ritual creates a circular Ward on the floor or ground, intended to prevent the passage of ghouls. This ward uses the standard rules for Warding circles.",
ingredients: "The caster draws the Warding circle with a human bone dipped in the Blood.",
}

const dagonsCall = {
    title: "Dagon's Call",
lvl: 3,
description: "A terrifying technique employed by the assassins of the Banu Haqim, this Ritual lets the user rupture the very blood vessels of the victim from afar, having only touched them but briefly previously. Mortals expire rather messily, and even vampires must fear this silent killer",
ingredients: "A gold inlaid ceremonial dagger.",
process: "Before proceeding with the ritual the victim must be exposed the caster's Blood, either by drinking it or having it touch an open wound or even their bare skin: a single drop smeared across the arm is enough. After an hour but before a week has passed the caster can perform the ritual by piercing their own skin with the ceremonial dagger, shedding blood. As their Blood hits the ground the ritual takes effect.",
system: "Make a Resolve + Blood Sorcery vs Stamina + Resolve roll. Every point of margin on a win does a point of damage to the victim, as their blood vessels burst and their lungs fill with blood. This damage is Aggravated for mortals, but only Superficial on vampires. The caster can repeat this process up to two more times, each time requiring them to make an additional Rouse Check.",
}

const deflectionOfWoodenDoom = {
    title: "Deflection of Wooden Doom",
lvl: 3,
description: "By performing this ritual the vampire protects themselves from being staked. The first stake that would pierce their heart shatters before penetrating the skin.",
ingredients: "Wood splinters or shavings.",
process: "The vampire mixes the shavings with their Blood and draws a circle around themselves. They must then meditate in this circle for an hour, concluding by placing one splinter of wood under their tongue.",
system: "Make no Ritual roll until the vampire is staked. If the Ritual roll is a win, the stake shatters as it touches the skin of the vampire. (A critical win blinds the attacker for two turns, showering their face with splinters.) This only works on genuine attempts at staking - merely holding the stake against the vampire does not trigger the effect. The protection lasts until the end of the night or until the splinter is removed from under the tongue of the vampire, whichever comes first.",
}

const essenceOfAir = {
    title: "Essence of Air",
lvl: 3,
description: "The caster creates a potion that when imbibed allows for limited flight. The Camarilla frowns upon the use of this Ritual, due to the extreme risk of Masquerade breaches; for this reason, its popularity has lessened considerably in the modern nights.",
ingredients: "Leaves and berries of belladonna.",
process: "The caster steeps the belladonna in their Blood, reducing the brew over a brazier while incanting words of power.",
system: "Make the Ritual roll when reducing the mixture. (A critical win prepares two doses worth of potion.) The caster can tell whether the ritual succeeded, so they won't end up with a dud. The resulting black potion retains its potency for a night and activates when imbibed. The potion enables the caster (and only them) to fly or hover at approximately running speed for a scene. The caster can carry a human-sized mass, though their speed drops to walking speed. Grabbing and carrying aloft an unwilling subject, or pulling the flier to the ground, both require a contest between the caster's Strength + Blood Sorcery and the other's Strength + Athletics.",
}

const firewalker = {
    title: "Firewalker",
lvl: 3,
description: "A painful ritual to perform, this allows the caster to make themselves and even their comrades resistant to fire.",
ingredients: "A fingertip of the caster.",
process: " The vampire cuts one of their fingertips off and burns it together with their Blood in a golden chalice or bowl.",
system: "Make a Stamina + Resolve test (Difficulty 3) to cut off a fingertip. On a winning Ritual roll, a bluish flame consumes the Blood and fingertip, signaling the completion of the ritual. For the rest of the night fire damage to the caster is halved. This ritual can be performed on others, but the fingertips sacrificed must all belong to the caster. The mutilation is not enough to count as damage to the caster; the fingertip regrows during day-sleep.",
}

const wardAgainstLupines = {
    title: "Ward against Lupines",
lvl: 3,
description: "This Ritual wards an item against werewolves, in any form. Any attempt by them to touch the item triggers the effect. This ward uses the standard rules for Wards.",
ingredients: "A handful of silver dust mixed with the Blood.",
}

const wardingCircleAgainstSpirits = {
    title: "Warding Circle against Spirits",
lvl: 3,
description: "This Ritual creates a circular Ward on the floor or ground, intended to prevent the passage of spirits. Although more difficult than some Warding circles, it is one of the most commonly found in grimoires and other sources. A human occultist could potentially reconstruct a functioning version of this Ritual with an Intelligence + Occult test (Difficulty 6), although they could not cast it without vitae or some other supernatural aid or element. This ward uses the standard rules for Warding circles.",
ingredients: "The caster draws the Warding circle with an iron knife dipped in salt and Blood.",
}

const defenseOfTheSacredHaven = {
    title: "Defense of the Sacred Haven",
lvl: 4,
description: "The performer of this powerful ritual can ward their haven against the sun itself, protecting their resting place from penetration by its destructive rays as a mystical darkness blankets the area.",
ingredients: "Nothing but the Blood of the caster.",
process: "The caster inscribes a number of sigils and glyphs on and around the area to be protected. They must take special care on windows and doorways, but may even ward an open doorway if the area is indoors. (The ritual wards gray or liminal areas, such as ruins, at the Storyteller's discretion.)",
system: "The process takes an hour or more, depending on the state or the area to be warded. The area can be no larger than a circle with a six-meter radius. The ritual automatically fails if the caster steps out of the area at any time after the warding is complete. The caster makes the Ritual roll once the sun rises. On a Win, shadow blankets the area, closing off any view of the outside but also preventing any sun damage to the vampires within. On a critical win, those inside can spy the outside world dimly. The Ritual lasts through an entire day unless ended by the caster stepping outside the area.",
}

const eyesOfTheNighthawk = {
    title: "Eyes of the Nighthawk",
lvl: 4,
description: "Related to the primitive powers of Animalism, this Ritual allows the caster to possess a carnivorous fowl, usually a raven or a bird of prey, directing its flight and seeing through its eyes. Parrots and mynahs, not being carnivores, cannot be used in this Ritual. Some Tremere spent years training crows or ravens to speak before using them as nighthawks; with the Pyramid disrupted, fewer Warlocks have the spare time now.",
ingredients: "The eyes of the bird used, taken at the conclusion of the Ritual.",
process: "The caster feeds their Blood to the bird and enters a trance.",
system: "On a winning Ritual roll the caster can control the bird and see through its eyes. On a critical win, the bird can perform simple actions under control, such as picking up objects or manipulating keys or dials. The caster can use most non-physical Disciplines through the bird, even Dominate assuming the caster has Telepathy or some other way to communicate with targets non-verbally. There is no limit to the range the bird can fly, though unless the caster plucks the eyes out of the bird at the end of the night they themselves suffer blindness for three nights to come.",
}

const incorporealPassage = {
    title: "Incorporeal Passage",
lvl: 4,
description: "The caster assumes an incorporeal state, not unlike a ghost, able to freely pass through objects and rendered totally immune to physical damage. They cannot interact physically with the material world except by sight and speech.",
ingredients: "A mirror.",
process: "The caster spills their Blood on the mirror, chanting, and then breaks it.",
system: "Make a Ritual roll. If the roll is a win, the caster assumes an incorporeal form as long as they hold a shard of the broken mirror. While incorporeal, the caster remains immune to everything except fire, sunlight, and arcane weapons and rituals capable of damaging spirits. The caster can still be seen and heard but cannot interact physically with anything or anyone. They cannot Rouse the Blood while incorporeal. Incorporeal casters have no access to any spirit realm; the ritual does not make them wraiths or spirits. The caster can walk through walls and other objects but must do so in a straight line; they cannot change direction while inside solid matter. This Ritual lasts for one scene or until the caster drops the shard. Returning to the material while inside solid matter can result in anything from destruction to entombment to minor inconvenience (the ashtray is stuck halfway through the caster's arm); the Storyteller decides the precise outcome.",
}

const wardAgainstCainites = {
    title: "Ward against Cainites",
lvl: 4,
description: "This Ritual wards an item against all vampires except the caster. Any attempt by them to touch the item triggers the effect. However, a vampire examining the Ward with Auspex can read the name of the caster in it with a successful contest of Intelligence + Auspex vs. the caster's Intelligence + Blood Sorcery.This ward uses the standard rules for Wards.",
ingredients: "Ash warm from a still-burning fire; casters risk terror frenzy, and cannot inscribe this Ward that night if they succumb to it.",
}

const wardingCircleAgainstLupines = {
    title: "Warding Circle against Lupines",
lvl: 4,
description: "This ward uses the standard rules for Warding circles.",
ingredients: "The caster draws the Warding circle with a silver knife dipped in wolfsbane and Blood.",
}

const escapeToTrueSanctuary = {
    title: "Escape to True Sanctuary",
lvl: 5,
description: 'By preparing two mystic circles in an arduous ritual the caster can instantly travel from one to the other. The journey is one-way, and the caster must designate one circle for departure while the "arrival" circle serves as an exit.',
ingredients: "Two charred circles of approximately a meter in diameter.",
process: "The caster burns the circles into the ground or floor with an open flame, then consecrates each circle. Consecration requires two hours of chanting per night and two Rouse Checks, for three consecutive nights. In total, this ritual takes twelve Rouse Checks worth of Blood from the caster.",
system: "Once the circles are complete the caster need but step into the one designated for departure and concentrate for a turn, making a Ritual roll. (The caster makes the Ritual roll each time they attempt to travel, but can only make one attempt per scene.) On a win the caster vanishes, reappearing in an instant in the middle of the exit circle. There is no limit to the distance between the two circles, but they must be inscribed on the ground or on the floor of a building, not on the floor of a vehicle. The caster can transport one person or an object or objects totaling roughly human mass with them. Damaging either circle ruins the ritual completely and renders both circles inert. A vampire can only have one pair of these circles functional at any given time.",
}

const heartOfStone = {
    title: "Heart of Stone",
lvl: 5,
description: "Performing this ritual turns the caster's unliving heart to stone. This makes them immune to stakes but also, through some fluke of sympathetic magic, completely remorseless and cold-hearted automatons totally unreceptive to emotional and social cues. Even more so than normal.",
ingredients: "A stone slab and a wax candle drenched with the Blood of the caster.",
process: "The caster lies on the stone slab with the candle on their chest letting it burn down to nothing over the course of a night. As the fire reaches their chest, it causes one point of Aggravated damage and forces a terror frenzy roll (Difficulty 3). If the caster fails the frenzy roll, the ritual ends. If the caster does not enter frenzy, they make the Ritual roll. On a win the ritual completes; a critical win heals the candle-fire damage. The effect persists indefinitely, and should the caster wish to reverse the process they must repeat the ritual.",
system: "While under the effect of the ritual, the caster's heart is literally made of stone. Stakes fail to penetrate it, breaking if forced. The caster also exhibits a complete emotional detachment, subtracting three dice from any Remorse rolls as well as active (not resisting) Social-related rolls, except for Intimidation and Dominate. The caster cannot employ Presence but gains three bonus dice to pools used to resist the effects of that Discipline.",
}

const shaftOfBelatedDissolution = {
    title: "Shaft of Belated Dissolution",
lvl: 5,
description: "The Kindred fear few weapons as they fear the dreaded stake created by this ritual. Thought to be the origin of the myth regarding stakes as the ultimate tool for slaying vampires, the Shaft of Belated Dissolution not only seeks out the heart of the vampire it's aimed at but actually causes Final Death when reaching its target. If need be, the Shaft works toward this goal as a splinter, inching its way through the target vampire's body to reach its goal.",
ingredients: "A stake carved of rowan wood, inscribed with baneful runes.",
process: "The caster drenches the stake with two Rouse Checks worth of their Blood, while blackening it in an oak-wood fire while reading incantations over it. The ritual takes five hours to complete.",
system: "This stake confers a three-dice bonus to any pool on any attempt to stake a vampire, whether hammered in while the victim sleeps, wielded in melee, or fired from a crossbow. The caster need not wield the stake themselves. If the attack roll wins with a margin of five or better, the vampire withers to dust in a single turn as if consumed by an invisible fire. If the stake hits, but the roll has insufficient margin (under five) to pierce the heart, the stake breaks off in the wound, the tip burying itself as it slowly begins to inch its way toward the heart of the victim. Depending on where it struck this can take hours or nights, but unless extracted by medical or mystical means, Final Death is assured. To remove it surgically someone other than the victim needs to win a roll of Dexterity + Medicine (Difficulty 6) in a process that takes up to four hours. If no medical expertise can be found, someone can remove the splinter by severing the afflicted limb - unless the splinter has already reached the torso.",
}

const wardingCircleAgainstCainites = {
    title: "Warding Circle against Cainites",
lvl: 5,
description: "This ward uses the standard rules for Warding Circles.",
ingredients: "The caster draws the Warding Circle with a rowan wand dipped in the mixture of ash from a still-burning fire and Blood.",
}

//THIN-BLOOD ALCHEMY
const farReach = {
    title: "Far Reach",
lvl: 1,
description: "This formula allows the alchemist to use their mind to grab, hold, and push objects or people without touching them. While few can employ enough mental force to actually cause direct harm, a clever applicant can find many ways to get an opponent into, or themselves out of, harm's way",
ingredients: "The alchemist's Blood, choleric human blood, melted nylon fibers or a grated refrigerator magnet or weird nootropics ordered off the internet.",
activationCost: "One Rouse Check.",
system: "The alchemist can lift, push, or pull a physical object or person under 100 kg, within their sight and closer than 10 meters. The object moves swiftly, but not rapidly enough to injure a person with the blow; the object may break if it is fragile. The exception: knives or other small metal tools, which the alchemist can wield with a Resolve + Alchemy test, at a two-dice penalty because of the need for precision. A knife used this way does only one point of extra damage.Trying to move someone actively resisting requires a contest of Resolve + Alchemy vs Strength + Athletics. On a win, the alchemist can pull the victim within grabbing or clawing range, or throw them one meter for each point of margin on the contest, doing an equal amount of Superficial damage. They land prone. Keeping someone or something floating in mid-air requires a Resolve + Thin-Blood Alchemy (Difficulty 3) roll every turn. Fine manipulation (such as pulling the pin of a grenade) requires a Wits + Alchemy roll at a suitable Difficulty, as determined by the Storyteller.",
duration: "One turn unless held (see above).",
dicePools: {
    user: ["resolve", "thinBloodAlchemy"],
    target: [
    "strength", "athletics"
    ]
}
}

const haze = {
    title: "Haze",
lvl: 1,
description: "This formula creates a field of mist that follows the user, rendering them more difficult to target with ranged weapons and concealing their identity.",
ingredients: "In addition to the alchemist's Blood and phlegmatic human blood, dry ice or cigar smoke or auto exhaust.",
activationCost: "One Rouse Check.",
system: "Upon activation a cloud of mist-like vapor surrounds the alchemist, masking their features and obscuring their silhouette. Anyone attempting to identify the user or hit them with ranged weapons suffers a two-dice penalty to their pool. The user can extend the cloud to encompass a group of up to five people by making another Rouse check.",
duration: "One scene or until voluntarily ended.",
}

const envelop = {
    title: "Envelop",
lvl: 2,
description: "This formula creates a mist that clings to a victim, blinding it and (in the case of mortals) causing suffocation.",
ingredients: "The alchemist's Blood, melancholic and phlegmatic human blood, potassium chlorate, smog or halon gas.",
activationCost: "One Rouse Check.",
system: "The alchemist activates the power and chooses a target within sight. A swirling mist envelops the target, obscuring their sight and penalizing them three dice from all sight-based detection and ranged attack dice pools. In addition, the alchemist can make the mist suffocate a mortal with a contest of Wits + Alchemy vs. Stamina + Survival. On a win, the target can take no action except coughing and choking; on a critical win, the target loses consciousness. The alchemist can only employ Envelop on single targets, and only on one at a time.",
duration: "Until scene ends or the alchemist ends the effect voluntarily.",
dicePools: {
    user: ["wits", "thinBloodAlchemy"],
    target: [
    "stamina", "survival"
    ]
}
}

const defractionate = {
    title: "Defractionate",
lvl: 3,
description: "This formula results in a homeopathic elixir. When added to fractionated medical-supply blood, the elixir returns it to freshness, allowing vampires without the Iron Gullet merit to obtain nutrition from it.",
ingredients: ": The alchemist's Blood, sanguine and melancholic human blood, O-negative human blood (only a few ml), moldy spinach, hot black coffee, sodium octanoate.",
system: "The alchemist taps their vessel (Calcinatio), or their own vein (Athanor Corporis) to get the Defractionate elixir if they do not use Fixatio. For each success on the distillation roll, they get enough elixir to turn one blood bag (slakes 1 Hunger) from fractionated to unfractionated blood. Any vampire can consume this blood and slake Hunger with it.",
duration: "",
distillationMethod: [
    {
    title: "Athanor Corporis",
    description: "The alchemist can tap their own vein once per night for this elixir until their next feeding, or until they reach Hunger 5. They need not pay the distillation cost again."
    },
    {
    title: "Calcinatio",
    description: "If the vessel survives the tap, the alchemist can tap them again in a week for more elixir. They need not pay the distillation cost again, but the vessel pays the Health cost (3 Aggravated damage) each time they are tapped."
    }
],
}

const profaneHierosGamos = {
    title: "Profane Hieros Gamos",
lvl: 3,
description: "To the Alchemist, rebirth and renewal are not locked behind the ritual of sacred union between two opposites. Through the power of their mercurial vitae the Alchemist can help shape a human body to match the mental self-image or desired shape held by the consciousness within it.With the help of rare reagents the Alchemist can even defy one of the fundamental curses of the vampiric condition by altering the unchanging state to which the undead revert to in their daysleep. This specific formula can be imbibed by vampires other than the Alchemist, after their ritual purification and deep meditation on their own idealized, or desired, form.This knowledge makes the expertise of the Alchemist a valuable and desired commodity even to those Kindred who loathe their very existence. Duskborn openly offering services like these are more likely to be coerced to work or kidnapped than paid handsomely.",
ingredients: "The alchemist's Blood, melancholic and phlegmatic human blood, entheogenic substances.",
activationCost: "One Rouse Check.",
system: "Whoever imbibes the formula mixed with a Rouse Check worth of their own Blood instantly falls into a catatonic fever dream until the following night, the depths of their psyche plumbed for their personal idealized form, or a form strongly desired. The effects of Profane Hieros Gamos are limited to the external morphology of the human form, the body refusing transformations too outlandish and fantastical to be without the wondrous spectrum of human anatomy. The imbiber makes a Stamina + Resolve roll against a difficulty of 8 minus the successes on the distillation roll, adding their Bane Severity to the Difficulty of the test.On a win, the transformation process is successful and their physical body molds to the desired shape. A critical win can grant and remove Merits and Flaws of the Looks category, though like all Advantages they need to be paid for with Experience points. A messy critical or a bestial failure might cause a new Flaw to manifest, ranging from Repulsive, Obvious Predator, Stigmata or even Organovore as the Beast interferes with the transformation. Not even the blood of the Duskborn can spare the Nosferatu from their Bane, the process incorporating the clan's hideous affliction despite the user's mental image.",
duration: "Permanent until performed again.",
}

const airborneMomentum = {
    title: "Airborne Momentum",
lvl: 4,
description: "This formula enables the alchemist to lift themselves from the ground, achieving a state of swift flight or floating. They can fly in any direction, including up or down, though their carrying capacity is limited.",
ingredients: "The alchemist's Blood, choleric and sanguine human blood, champagne, bird blood, helium, scopolamine or belladonna extract.",
activationCost: "One Rouse Check.",
system: "The potion enables the alchemist (and only them) to fly or hover at approximately running speed. The flier can carry a human-sized mass, though their speed drops to walking speed. Grabbing and carrying aloft an unwilling subject or pulling the flier to the ground both require a contest between the alchemist's Strength + Alchemy and the other's Strength + Athletics.",
duration: "One scene.",
}

const awakenTheSleeper = {
    title: "Awaken the Sleeper",
lvl: 5,
description: "This formula results in an elixir which, when added to human blood, can awaken a vampire from Torpor.",
ingredients: "The alchemist's Blood, choleric or sanguine human blood, adrenaline, ammonium carbonate, hartshorn, caffeine or benzedrine, melatonin.",
system: "The alchemist taps their vessel (Calcinatio), or their own vein (Athanor Corporis) to get the Awaken the Sleeper elixir if they do not use Fixatio. They then mix the elixir into human blood. For each success above 2 on the distillation roll, the elixir can awaken a vampire of that Blood Potency. Example: Hari gets 5 successes on his Awaken the Sleeper distillation roll: this elixir can awaken a torpid vampire of Blood Potency 3 or less (5 - 2 = 3).",
distillationMethod: [
    {
    title: "Athanor Corporis",
    description: "The alchemist can tap their own vein once per night for this elixir until their next feeding, or until they reach Hunger 5. They need not pay the distillation cost again."
    },
    {
    title: "Calcinatio",
    description: "If the vessel survives the tap, the alchemist can tap them again in a week for more elixir. They need not pay the distillation cost again, but the vessel pays the Health cost (5 Aggravated damage) each time they are tapped. The Alchemist can also simply feed the vessel's blood to the sleeper directly."
    }
],
}
  


  
  
const intelligence = {
    summary: "Memory, reasoning, intellect.",
    category: "mental",
    description:
        "Intelligence measures your ability to reason, research and apply logic. You can recall and analyze information from books or from your senses. No puzzle or mystery can elude the truly intelligent.",
    dotDescriptions: {
        1: "You can read and write competently, though some terms confound you.",
        2: "You are smart enough to realize your limitations.",
        3: "You are enlightened, able to piece together clues without difficulty.",
        4: "You're likely consulted by members of Clan Tremere for your wisdom.",
        5: "Genius does not cover the depths and range of your intellect.",
    },
}

const resolve = {
    summary: "Focus, concentration, attention.",
    category: "mental",
    description:
        "Resolve provides focus and determination, and measures concentration and mental fortitude. Resolve powers all-night watches and blocks out distractions. Resolve also increases your Willpower.",
    dotDescriptions: {
        1: "You have minimal attention for all but the most pressing things.",
        2: "You can settle in for the long haul, as long as it's not too long.",
        3: "Distracting you takes more effort than most other people want to spend.",
        4: "You can brute-force your way to a deduction past any obstacles.",
        5: "You can think in a gunfight or watch the door in a blood orgy and then clean up every shell casing or spilled droplet.",
    },
}

const wits = {
    summary: "Cleverness, intuition, spur-of-the-moment decision-making.",
    category: "mental",
    description:
        'Wits are for thinking quickly and reacting correctly on little information. "You hear a sound" is Wits; "You hear two guards coming" is Intelligence. Wits lets you smell an ambush or answer the Harpy back at court right away, instead of thinking of the best response the next night.',
    dotDescriptions: {
        1: "You get the point eventually, but it takes explaining.",
        2: "You can bet the odds in poker or apply the emergency brakes in time. Usually.",
        3: "You can analyze a situation and quickly work out the best escape route.",
        4: "You are never caught on the back foot and always come up with a smart riposte.",
        5: "You think and respond more quickly than most people can comprehend.",
    },
}

const stamina = {
    summary: "Toughness, resilience, endurance.",
    category: "physical",
    description:
    "Your physical resistance: Stamina absorbs physical harm, such as a speeding bullet or a hunter's blade, and lets you persevere through hazards and arduous effort. Stamina also affects your Health.",
    dotDescriptions: {
        1: "Even lesser exertions make you winded.",
        2: "You can take a beating, but consider suing for peace.",
        3: "Several days of hard hiking with a backpack is no problem for you.",
        4: "You could win a marathon or take copious amounts of pain, at least physically.",
        5: "Even if you were a mortal, you'd never break a sweat.",
    },
}

const strength = {
    summary: "Exertion of force by the muscles.",
    category: "physical",
    description:
        "Strength governs how big a mortal you can lift, how hard you can hit them, and how much force you can push your dead body to exert. (The rough amount you can deadlift without an Attribute test appears in parentheses.)",
    dotDescriptions: {
        1: "You can easily crush a beer can. (20 kg: a Christmas tree, a stop sign)",
        2: "You are physically average. (45 kg: a toilet)",
        3: "You might be able to break open a wooden door. (115 kg: a large human, an empty coffin, a refrigerator)",
        4: "You are a prime physical specimen, likely with very visible musculature. (180 kg: a full coffin, an empty dumpster)",
        5: "You are a true powerhouse and can likely break open a mental fire door, tear open a chain-link fence, or snap open a chained gate. (250 kg: a motorcycle, a piano)",
    },
}

const dexterity = {
    summary: "Agility, grace, eye-hand coordination.",
    category: "physical",
    description:
        "Dexterity governs your agility and grace, how swiftly you dodge that stake to your heart, and how much fine motor control you possess when up against the clock.",
    dotDescriptions: {
        1: "You can run, but balance and dodging are a challenge.",
        2: "Your sprint is solid, and sometimes you appear graceful.",
        3: "Your agility is impressive, and your coordination is as good as any trained amateur.",
        4: "You could excel at acrobatics and move in a way few humans can.",
        5: "Your movements are liquid and hypnotic - almost super-human.",
    },
}


const charisma = {
    summary: "Charm, magnetism, strength of personality.",
    category: "social",
    description: "Charisma measures your natural charm, grace, and sex appeal. If you have it, it draws people to you, making feeding a hell of a lot easier. Charisma doesn't depend on good looks, which are their own Merit.",
    dotDescriptions: {
        1: "You can speak clearly, though few people tend to listen.",
        2: "Generally likeable despite your undead nature, you may even have friends.",
        3: "People trust you implicitly and you easily make friends.",
        4: "You possess significant personal magnetism and draw followers like flies.",
        5: "You could lead a city in rebellion, if you so choose.",
    },
}

const composure = {
    summary: "Self-control, cool, calm head.",
    category: "social",
    description:
        "Composure allows you to remain calm, to command your emotions, and to put others at ease despite anxiety. It also represents your ability to stay cool in everything from firefights to intimate encounters. Composure also adds to your Willpower.",
    dotDescriptions: {
        1: "The slightest insult or confrontation could drive you to a frenzy.",
        2: "You can subdue your predatory instincts in most non-hostile situations.",
        3: "Others look to you for guidance when the blood spatter hits the fan.",
        4: "You can effortlessly bluff at cards and can manage your Beast to some extent.",
        5: "The Beast is your pet.",
    },
}

const manipulation = {
    summary: "Getting others to do what you want.",
    category: "social",
    description:
        "Manipulation is your ability to twist others to your point of view, lie convincingly and walk away after duping a mark without anyone being any the wiser.",
    dotDescriptions: {
        1: "As long as you stay honest, you can convince people to do what you want.",
        2: "Your ability to deceive surpasses the will of the weak-willed and simple-minded.",
        3: "You never have to pay full price for anything.",
        4: "You could be a cult leader - or a politician.",
        5: "You could convince the Prince to invest in desert property, or maybe even to call off the Blood Hunt on your head.",
    },
}

  
  
  
  //Social skills
  const animalKen = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const etiquette = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const insight = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const intimidation = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const leadership = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const performance = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const persuasion = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const streetwise = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const subterfuge = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  //Mental skills
  const academics = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const awareness = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  const finance = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const investigation = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const medicine = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const occult = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const politics = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const science = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  const technology = {
    summary: "",
    description: "",
    title: "",
    specialties: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    dotDescriptions: [
      "",
      "",
      "",
      "",
      "",
    ]
  }
  
  
  
  
  
  
  
  
  
  
  
  function addData () {
    //Skill
    const skill= {
      summary: "",
      description: "",
      specialties: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      dotDescriptions: [
        "",
        "",
        "",
        "",
        "",
      ]
    }
  
    //Clan
    const clan = {
      summary: "",
      description: "",
      bane: "",
      clanDisciplines: [
        {
          title: "",
          description: ""
        },
      ],
      archetypes: [
        {
          title: "",
          description: ""
        },
      ],
    }
  
    //Disciplines
    const discipline = {
      summary: "",
      description: "",
      characteristics: {
        type: "",
        bloodResonance: "",
        masqueradeThreat: "",
        description: "",
      },
    }
  
    const power = {
      lvl: 1,
      cost: "",
      description: "",
      duration: "",
      system: "",
      dicePool: [
        "charisma", "animalKen"
      ]
    }
  
    //Predator Types
    const predatorType = {
      summary: "",
      description: "",
      gain: {
        spend: [
          {
            dotAmount: 3,
            type: "background",
            options: [
              "Fame", "Herd"
            ],
          },
          {
            dotAmount: 2,
            type: "flaw",
            options: [
              "Enemies", "Mythic"
            ],
          },
        ],
        chooseOne: {
          specialty: [
            {
              title: "Intimidation",
              ref: "intimidation - change later",
              detail: "Stickups",
              type: "skill"
            },
            {
              title: "Brawl",
              ref: "brawl - change later",
              detail: "Grapple",
              type: "skill"
            }
          ],
  
          discipline: [
            {title: "Celerity",
            dotAmount: 1,
            ref: "celerity - change later",
            exclusiveToClan: "Tremere",
            type: "discipline"
          }
          , {potence: 1}
  
          ],        
        },
        meritOrFlaw: [
          {
            category: "Fame",
            subcategory: "Dark Secret",
            dotAmount: 1,
            title: "Prey Exclusion",
            detail: "mortals",
            description: "see Bagger for how to use description",
            type: "flaw",
          }
        ],
        bloodPotency: 1,
      },
      lose: {
          humanity: 1
        }
    }
  }
// ============================================
// WORD LISTS
// ============================================

// Answer words — curated common 5-letter words (the daily pool)
const ANSWER_WORDS = [
    'ABOUT','ABOVE','ACTOR','ACUTE','ADMIT','ADOPT','AGENT','AGREE','ALARM','ALBUM',
    'ALERT','ALIEN','ALIGN','ALIKE','ALIVE','ALLEY','ALLOW','ALONE','ALONG','ALTER',
    'AMONG','ANGEL','ANGER','ANGLE','ANGRY','APART','APPLE','ARENA','ARGUE','ARISE',
    'ASIDE','AVOID','AWARD','AWARE','BADLY','BASIC','BASIS','BEACH','BEGIN','BEING',
    'BELLY','BELOW','BENCH','BIRTH','BLACK','BLADE','BLAME','BLAND','BLANK','BLAST',
    'BLAZE','BLEED','BLEND','BLESS','BLIND','BLOCK','BLOOD','BLOOM','BLOWN','BOARD',
    'BONUS','BOUND','BRAIN','BRAND','BRAVE','BREAD','BREAK','BREED','BRICK','BRIDE',
    'BRIEF','BRING','BROAD','BROKE','BROOK','BROWN','BRUSH','BUILD','BUNCH','BURST',
    'BUYER','CABIN','CANDY','CARGO','CARRY','CATCH','CAUSE','CHAIN','CHAIR','CHARM',
    'CHART','CHASE','CHEAP','CHECK','CHEEK','CHESS','CHEST','CHIEF','CHILD','CHINA',
    'CHUNK','CLAIM','CLASS','CLEAN','CLEAR','CLIMB','CLING','CLOCK','CLOSE','CLOTH',
    'CLOUD','COACH','COAST','COULD','COUNT','COURT','COVER','CRACK','CRAFT','CRANE',
    'CRASH','CRAZY','CREAM','CREEK','CRIME','CROSS','CROWD','CROWN','CRUEL','CRUSH',
    'CURVE','CYCLE','DAILY','DANCE','DEATH','DEBUT','DELAY','DEPTH','DEVIL','DIRTY',
    'DOUBT','DRAFT','DRAIN','DRAMA','DRANK','DRAWN','DREAM','DRESS','DRIFT','DRINK',
    'DRIVE','DROIT','EAGER','EARLY','EARTH','EIGHT','ELECT','ELITE','EMPTY','ENEMY',
    'ENJOY','ENTER','ENTRY','EQUAL','ERROR','EVENT','EVERY','EXACT','EXERT','EXIST',
    'EXTRA','FAINT','FAITH','FALSE','FANCY','FATAL','FAULT','FEAST','FENCE','FEVER',
    'FEWER','FIBER','FIELD','FIGHT','FINAL','FIRST','FIXED','FLAME','FLASH','FLESH',
    'FLEET','FLOAT','FLOOD','FLOOR','FLOUR','FLUID','FOCUS','FORCE','FORGE','FORTH',
    'FORUM','FOUND','FRAME','FRANK','FRAUD','FRESH','FRONT','FROST','FRUIT','FULLY',
    'GIANT','GIVEN','GLASS','GLOBE','GLOOM','GLORY','GRACE','GRADE','GRAIN','GRAND',
    'GRANT','GRAPE','GRAPH','GRASP','GRASS','GRAVE','GREAT','GREEN','GREET','GRIEF',
    'GROSS','GROUP','GROVE','GROWN','GUARD','GUESS','GUEST','GUIDE','GUILD','GUILT',
    'HABIT','HAPPY','HARSH','HAUNT','HEART','HEAVY','HENCE','HORSE','HOTEL','HOUSE',
    'HUMAN','HUMOR','IDEAL','IMAGE','IMPLY','INDEX','INNER','INPUT','IRONY','IVORY',
    'JOINT','JUDGE','JUICE','KNACK','KNOCK','KNOWN','LABEL','LARGE','LASER','LATER',
    'LAUGH','LAYER','LEARN','LEAST','LEAVE','LEGAL','LEVEL','LIGHT','LIMIT','LINEN',
    'LIVER','LOBBY','LOCAL','LOGIC','LOOSE','LOVER','LOWER','LUCKY','LUNAR','LUNCH',
    'MAGIC','MAJOR','MAKER','MANOR','MARCH','MATCH','MAYOR','MEDIA','MERCY','METAL',
    'MIGHT','MINOR','MINUS','MODEL','MONEY','MONTH','MORAL','MOTOR','MOUNT','MOUSE',
    'MOUTH','MOVIE','MUSIC','NAIVE','NERVE','NEVER','NEWLY','NIGHT','NOBLE','NOISE',
    'NOTED','NOVEL','NURSE','OCCUR','OCEAN','OFFER','OFTEN','OLIVE','ONSET','OPERA',
    'ORBIT','ORDER','OTHER','OUGHT','OUTER','OWNER','OXIDE','PAINT','PANEL','PANIC',
    'PAPER','PARTY','PATCH','PAUSE','PEACE','PEARL','PENNY','PHASE','PHONE','PHOTO',
    'PIANO','PIECE','PILOT','PITCH','PIXEL','PLACE','PLAIN','PLANE','PLANT','PLATE',
    'PLAZA','PLEAD','PLUCK','PLUMB','POINT','POUND','POWER','PRESS','PRICE','PRIDE',
    'PRIME','PRINT','PRIOR','PRIZE','PROBE','PROOF','PROUD','PROVE','PSALM','PULSE',
    'PUNCH','PUPIL','QUEEN','QUEST','QUEUE','QUICK','QUIET','QUITE','QUOTA','QUOTE',
    'RADAR','RADIO','RAISE','RANGE','RAPID','RATIO','REACH','REACT','READY','REALM',
    'REIGN','RELAX','REPLY','RIGHT','RIGID','RISKY','RIVAL','RIVER','ROBOT','ROCKY',
    'ROUGH','ROUND','ROUTE','ROYAL','RUGBY','RULER','RURAL','SADLY','SAINT','SALAD',
    'SCALE','SCENE','SCOPE','SCORE','SENSE','SERVE','SEVEN','SHALL','SHAME','SHAPE',
    'SHARE','SHARP','SHEET','SHELF','SHELL','SHIFT','SHINE','SHIRT','SHOCK','SHOOT',
    'SHORT','SHOUT','SIGHT','SKILL','SKULL','SLATE','SLAVE','SLEEP','SLICE','SLIDE',
    'SLOPE','SMALL','SMART','SMELL','SMILE','SMOKE','SOLID','SOLVE','SORRY','SOUND',
    'SOUTH','SPACE','SPARE','SPEAK','SPEED','SPEND','SPENT','SPIKE','SPINE','SPLIT',
    'SPOKE','SPORT','SPRAY','SQUAD','STACK','STAFF','STAGE','STAKE','STALE','STALL',
    'STAMP','STAND','STARE','START','STATE','STEAM','STEEL','STEEP','STEER','STERN',
    'STICK','STILL','STOCK','STONE','STOOD','STORE','STORM','STORY','STOVE','STRAP',
    'STRAW','STRIP','STUCK','STUDY','STUFF','STYLE','SUGAR','SUITE','SUPER','SURGE',
    'SWAMP','SWEAR','SWEEP','SWEET','SWIFT','SWING','SWORD','SWORE','TABLE','TASTE',
    'TEACH','TEETH','THANK','THEME','THICK','THING','THINK','THIRD','THORN','THOSE',
    'THREE','THREW','THROW','TIGER','TIGHT','TIMER','TIRED','TITLE','TODAY','TOKEN',
    'TOTAL','TOUCH','TOUGH','TOWER','TOXIC','TRACE','TRACK','TRADE','TRAIL','TRAIN',
    'TRAIT','TRASH','TREAT','TREND','TRIAL','TRIBE','TRICK','TROOP','TRUCK','TRULY',
    'TRUMP','TRUNK','TRUST','TRUTH','TUMOR','TWICE','TWIST','ULTRA','UNCLE','UNDER',
    'UNION','UNITE','UNITY','UNTIL','UPPER','UPSET','URBAN','USAGE','USUAL','UTTER',
    'VALID','VALUE','VAULT','VIDEO','VIGOR','VIRUS','VISIT','VITAL','VIVID','VOCAL',
    'VOICE','VOTER','WAGES','WASTE','WATCH','WATER','WEAVE','WEIRD','WHEAT','WHEEL',
    'WHERE','WHICH','WHILE','WHITE','WHOLE','WHOSE','WOMAN','WORLD','WORRY','WORSE',
    'WORST','WORTH','WOULD','WOUND','WRIST','WRITE','WRONG','WROTE','YIELD','YOUNG','YOUTH'
];

// Valid guesses — broader dictionary for validation (includes answer words)
const VALID_GUESSES = [
    'ABACK','ABASE','ABASH','ABATE','ABBEY','ABORT','ABUSE','ABYSS','ACORN','ACRID',
    'ADDED','ADEPT','ADORE','ADORN','ADULT','AEGIS','AFIRE','AFTER','AGAIN','AGILE',
    'AGING','AGLOW','AGONY','AIMED','AISLE','ALGAE','ALIBI','ALLAY','ALLOT','ALOFT',
    'ALOOF','ALPHA','AMASS','AMAZE','AMBER','AMBLE','AMEND','AMPLE','AMUSE','ANKLE',
    'ANNEX','ANNOY','ANVIL','AORTA','APTLY','ARBOR','ARDOR','ARMOR','AROMA','ARRAY',
    'ARROW','ARSON','ASSET','ATLAS','ATONE','ATTIC','AUDIO','AUDIT','AUGUR','AVAIL',
    'AVERT','AVIAN','AXIOM','BACON','BADGE','BADLY','BAGEL','BARON','BASIN','BATCH',
    'BATON','BEARD','BEAST','BEGAN','BEIGE','BERRY','BEVEL','BIBLE','BILLY','BINGO',
    'BIRCH','BISON','BITTEN','BLARE','BLEAT','BLISS','BLITZ','BLOAT','BLOND','BLUFF',
    'BLUNT','BLURB','BLURT','BLUSH','BOGUS','BOILS','BOLTS','BONDS','BONES','BOOKS',
    'BOOST','BOOTH','BOOTY','BOOZE','BORAX','BOXER','BRACE','BRAID','BRAKE','BRASS',
    'BRAWN','BRAZE','BRIAR','BRIBE','BROIL','BROOD','BROOK','BROTH','BRUNT','BUDGE',
    'BUGGY','BUGLE','BULGE','BULKY','BULLY','BUNNY','BURNS','BUSHY','BUTCH','CABAL',
    'CADET','CAMEL','CAMEO','CANAL','CANOE','CAPER','CAPON','CARAT','CARGO','CAROL',
    'CASTE','CAULK','CAVIL','CEDAR','CHAFE','CHALK','CHAMP','CHANT','CHAOS','CHASM',
    'CHILL','CHIMP','CHOIR','CHORD','CHORE','CHUNK','CHURN','CIGAR','CINCH','CIRCA',
    'CIVIC','CIVIL','CLACK','CLAMP','CLANG','CLANK','CLASH','CLASP','CLAW','CLIFF',
    'CLIMB','CLINK','CLOAK','CLONE','CLOUT','CLOWN','CLUCK','CLUMP','CLUNG','COARSE',
    'COBRA','COMET','COMIC','CONCH','CORAL','COUCH','COUGH','COVET','COZY','CRAMP',
    'CRANK','CRASS','CRATE','CRAVE','CRAWL','CRAZE','CREAK','CREEP','CREST','CRIMP',
    'CRISP','CROAK','CROCK','CROOK','CROUCH','CRUDE','CRUMB','CUBIC','CURRY','DECAY',
    'DECAL','DECOR','DECOY','DELTA','DELVE','DEMON','DENIM','DENSE','DEPOT','DERBY',
    'DETOX','DEUCE','DIARY','DIGIT','DINGO','DISCO','DITCH','DIZZY','DODGE','DOING',
    'DOLLY','DONOR','DONUT','DOWDY','DOWEL','DOZEN','DRAPE','DREAD','DRIED','DRIER',
    'DROOL','DROOP','DROWN','DRUID','DRUNK','DRYER','DRYLY','DUNCE','DWELL','DYING',
    'EASEL','EATER','EDICT','EERIE','EIGHT','ELBOW','ELDER','ELFIN','ELITE','ELOPE',
    'ELUDE','EMCEE','EMBER','ENACT','ENDOW','ENEMA','ENSUE','ENVOY','EPOCH','EQUIP',
    'ERASE','ERODE','ERUPT','ESSAY','ETHER','ETHIC','EVADE','EVICT','EVOKE','EXALT',
    'EXCEL','EXILE','EXPAT','EXPEL','EXTOL','FABLE','FACET','FEIGN','FEINT','FEMUR',
    'FERRY','FETCH','FETID','FIBRE','FILTH','FINCH','FLAIR','FLASK','FLEDGE','FLICK',
    'FLING','FLINT','FLOCK','FLORA','FLOSS','FLOUT','FLUFF','FLUKE','FLUNG','FLUNK',
    'FLUSH','FLUTE','FOCAL','FOGGY','FOLLY','FORAY','FORGO','FORGE','FORTE','FORTY',
    'FOYER','FRAIL','FREAK','FREED','FRILL','FRISK','FRITZ','FRIZZ','FROND','FROZE',
    'FRUGAL','FUNGI','FUZZY','GAUGE','GAUZE','GAZER','GECKO','GENRE','GHOST','GIDDY',
    'GIRTH','GIVER','GLAND','GLARE','GLEAM','GLEAN','GLIDE','GLINT','GLOSS','GLOVE',
    'GLYPH','GNASH','GOLEM','GOOSE','GORGE','GOUGE','GOURD','GRACE','GRAFT','GRAIL',
    'GRAND','GRASP','GRATE','GRAZE','GREED','GRILL','GRIME','GRIND','GRIPE','GRITS',
    'GROAN','GROIN','GROOM','GROPE','GROUT','GROWL','GRUEL','GRUFF','GRUMP','GRUNT',
    'GUAVA','GUIDE','GUISE','GULCH','GULLY','GUMMY','GUSTO','GUSTY','GYPSY','HAVEN',
    'HAVOC','HAZEL','HEADY','HEARD','HEATH','HEAVE','HEDGE','HEFTY','HEIST','HELIX',
    'HELLO','HERON','HILLY','HINGE','HIPPO','HITCH','HOARD','HOBBY','HOMER','HONEY',
    'HONOR','HORNY','HOVER','HOWDY','HULKY','HUMID','HUNKY','HURRY','HYENA','ICING',
    'IDIOT','IGLOO','IMBUE','IMPEL','INCUR','INEPT','INERT','INFER','INGOT','INLET',
    'INTER','IRATE','ISSUE','IVORY','JAUNT','JAZZY','JELLY','JEWEL','JIFFY','JIMMY',
    'JOKER','JOLLY','JOUST','JUMBO','JUMPY','JUROR','KAYAK','KEBAB','KHAKI','KINKY',
    'KIOSK','KNEAD','KNEEL','KNIFE','KNOLL','LABOR','LADEN','LANCE','LAPSE','LATCH',
    'LATHE','LATTE','LEDGE','LEECH','LEMMA','LEMON','LETUP','LEVER','LIMBO','LINER',
    'LINGO','LLAMA','LOAFS','LODGE','LOFTY','LORRY','LOTUS','LUCID','LUMEN','LUMPY',
    'LUNGE','LUPUS','LUSTY','LYMPH','LYNCH','LYRIC','MACHO','MAFIA','MANGO','MANIA',
    'MAPLE','MARSH','MASON','MATTE','MAXIM','MEALY','MEDAL','MELEE','MELON','MERGE',
    'MERRY','MICRO','MIDST','MIMIC','MINCE','MINIM','MINTY','MIRTH','MISER','MISTY',
    'MODAL','MOGUL','MOIST','MOLDY','MONEY','MOODY','MOOSE','MORAL','MORPH','MOSSY',
    'MOTEL','MOTIF','MOTTO','MOUND','MOURN','MOVER','MUCUS','MUDDY','MULCH','MUMMY',
    'MURAL','MURKY','MUSHY','MUSTY','MYRRH','NASAL','NASTY','NAVAL','NERDY','NICHE',
    'NINNY','NINTH','NITTY','NOMAD','NOTCH','NUDGE','NYLON','OAKEN','OASIS','OCCUR',
    'ODDLY','OFFAL','OMEGA','ONSET','OPTIC','ORGAN','OTTER','OUGHT','OUNCE','OUTDO',
    'OUTER','OVARY','OXIDE','OZONE','PADDY','PAGAN','PANDA','PANSY','PASTA','PASTY',
    'PATIO','PAVEN','PEACH','PEAKY','PECAN','PEDAL','PERCH','PERIL','PERKY','PESKY',
    'PETAL','PETTY','PHONE','PHONY','PIGGY','PINCH','PINTO','PIPER','PIQUE','PIVOT',
    'PIXIE','PLAIT','PLANK','PLEAT','PLIER','PLOD','PLOP','PLOY','PLUMB','PLUME',
    'PLUMP','PLUNK','PLUSH','POACH','POKER','POLAR','POLKA','POLYP','POPPY','PORCH',
    'POSER','POSIT','POSSE','POUCH','POUTY','PRANK','PRAWN','PREEN','PRESS','PRICK',
    'PRIED','PRIMP','PRISM','PRIVY','PROD','PRONG','PROSE','PROXY','PRUDE','PRUNE',
    'PSALM','PUDGY','PULSE','PUPPY','PUREE','PUSHY','PYGMY','QUALM','QUARK','QUASI',
    'QUERY','QUILT','QUIRK','RABBI','RABID','RACER','RALLY','RANCH','RANDY','RAVEN',
    'RAYON','RAZOR','REALM','REBUS','RECAP','REFER','REHAB','REIGN','RELAY','REMIT',
    'RENAL','REPAY','REPEL','RESET','RESIN','RETCH','RIDGE','RIFLE','RIPEN','RISEN',
    'RITZY','ROAST','ROBIN','RODEO','ROGUE','ROOST','ROUGE','ROVER','ROWDY','RUBLE',
    'RUDDY','RUMEN','RUMOR','RUPEE','RUSTY','SABRE','SAFER','SASSY','SAUCE','SAUCY',
    'SAUNA','SCALD','SCALP','SCANT','SCARE','SCARF','SCARY','SCOLD','SCONE','SCOOP',
    'SCOOT','SCOUT','SCOWL','SCRAM','SCRAP','SCRUB','SEDAN','SEIZE','SERUM','SETUP',
    'SEWER','SHACK','SHADE','SHADY','SHAKE','SHALE','SHALT','SHANK','SHAWL','SHEAR',
    'SHEEN','SHEER','SHINE','SHINY','SHIRE','SHOAL','SHORE','SHOWN','SHREW','SHRUB',
    'SHRUG','SHUNT','SIEGE','SIEVE','SINCE','SINEW','SIREN','SIXTY','SKATE','SKIER',
    'SKIMP','SKIRT','SKUNK','SLACK','SLAIN','SLANG','SLANT','SLASH','SLEEK','SLEET',
    'SLEPT','SLIMY','SLING','SLINK','SLOSH','SLOTH','SLUMP','SLUNG','SLUNK','SMACK',
    'SMEAR','SMELT','SMIRK','SMITH','SMOCK','SNACK','SNAIL','SNARE','SNARL','SNEAK',
    'SNEER','SNIDE','SNIFF','SNORE','SNORT','SNOUT','SOGGY','SOLAR','SONIC','SOOTHE',
    'SPADE','SPANK','SPARK','SPAWN','SPEAR','SPECK','SPELL','SPICE','SPICY','SPILL',
    'SPIRE','SPITE','SPLAT','SPOOF','SPOOK','SPOOL','SPOON','SPORE','SPOUT','SPRIG',
    'SPUNK','SQUAT','SQUID','STAB','STAG','STAID','STAIN','STAIR','STANK','STARK',
    'STASH','STEAD','STEAK','STEAL','STEED','STEEP','STIFF','STING','STINK','STINT',
    'STOIC','STOKE','STOMP','STOOL','STOOP','STORK','STOUT','STRUM','STRUT','STUNG',
    'STUNK','STUNT','SUING','SULKY','SUMAC','SUNNY','SURGE','SURLY','SUSHI','SWANK',
    'SWARM','SWATH','SWEAT','SWELL','SWEPT','SWILL','SWINE','SWIRL','SWOOP','SYRUP',
    'TABBY','TACIT','TAFFY','TAINT','TAKEN','TAKER','TALON','TANGO','TAPER','TAPIR',
    'TARDY','TAROT','TAUNT','TAWNY','TEDDY','TEMPO','TENET','TENOR','TENSE','TEPID',
    'THEIR','THERE','THETA','THIEF','THIGH','TIDAL','TOAST','TODDY','TOKEN','TOPAZ',
    'TORCH','TORSO','TOTEM','TOWEL','TOXIC','TRAMP','TRAWL','TREAD','TRIAD','TRICE',
    'TRILL','TRITE','TROLL','TROUT','TRUCE','Tudor','TULIP','TUMOR','TUNER','TUNIC',
    'TURBO','TUTOR','TWANG','TWEED','TWIRL','UDDER','ULTRA','UMBRA','UNCAP','UNCUT',
    'UNDUE','UNFIT','UNIFY','UNLIT','UNPIN','UNSET','UNTIE','UNWED','USHER','UTILE',
    'VALET','VALOR','VALVE','VAPID','VAULT','VEGAN','VEINY','VELDT','VENOM','VENUE',
    'VERGE','VERSE','VIGOR','VILLA','VINYL','VIOLA','VIPER','VISOR','VISTA','VITAL',
    'VODKA','VOGUE','VOILA','VYING','WADDLE','WAGER','WAGON','WAIST','WALTZ','WARDEN',
    'WEARY','WEDGE','WEEDY','WHACK','WHALE','WHARF','WHEAT','WHERE','WHIFF','WHINE',
    'WHIRL','WIDOW','WIDTH','WIELD','WINDY','WITCH','WORDY','WRACK','WRATH','WREAK',
    'WRECK','WRING','WROTE','YEARN','YEAST','ZEBRA','ZESTY'
];

const VALID_SET = new Set([...ANSWER_WORDS.map(w => w.toUpperCase()), ...VALID_GUESSES.map(w => w.toUpperCase())]);

// ============================================
// DAILY WORD SELECTION
// ============================================

function getTodayString() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function getDailyWord() {
    const epoch = new Date(2025, 0, 1).getTime();
    const today = new Date(getTodayString()).getTime();
    const dayIndex = Math.floor((today - epoch) / 86400000);
    return ANSWER_WORDS[((dayIndex % ANSWER_WORDS.length) + ANSWER_WORDS.length) % ANSWER_WORDS.length];
}

// ============================================
// GAME STATE
// ============================================

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;
const STORAGE_KEY = 'wordguesser-state';

let targetWord = getDailyWord();
let guesses = [];
let currentGuess = '';
let gameState = 'playing';
let currentRow = 0;
let keyColors = {};
let isRevealing = false;

// ============================================
// LOCALSTORAGE
// ============================================

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            date: getTodayString(),
            guesses: guesses,
            state: gameState
        }));
    } catch (e) {}
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (data.date !== getTodayString()) return null;
        return data;
    } catch (e) {
        return null;
    }
}

// ============================================
// CORE ALGORITHM
// ============================================

function evaluateGuess(guess, target) {
    const result = Array(WORD_LENGTH).fill('absent');
    const targetCounts = {};

    for (const ch of target) {
        targetCounts[ch] = (targetCounts[ch] || 0) + 1;
    }

    // Pass 1: greens
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guess[i] === target[i]) {
            result[i] = 'correct';
            targetCounts[guess[i]]--;
        }
    }

    // Pass 2: yellows
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (result[i] === 'correct') continue;
        if (targetCounts[guess[i]] > 0) {
            result[i] = 'present';
            targetCounts[guess[i]]--;
        }
    }

    return result;
}

// ============================================
// DOM CONSTRUCTION
// ============================================

function buildBoard() {
    const board = document.getElementById('board');
    if (!board) return;
    for (let r = 0; r < MAX_GUESSES; r++) {
        const row = document.createElement('div');
        row.className = 'wg-row';
        row.dataset.row = r;
        for (let c = 0; c < WORD_LENGTH; c++) {
            const tile = document.createElement('div');
            tile.className = 'wg-tile';
            tile.dataset.row = r;
            tile.dataset.col = c;
            row.appendChild(tile);
        }
        board.appendChild(row);
    }
}

function buildKeyboard() {
    const keyboard = document.getElementById('keyboard');
    if (!keyboard) return;
    const rows = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['ENTER','Z','X','C','V','B','N','M','BACK']
    ];
    rows.forEach(keys => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'wg-keyboard-row';
        keys.forEach(key => {
            const btn = document.createElement('button');
            btn.className = 'wg-key';
            btn.dataset.key = key;
            btn.textContent = key === 'BACK' ? '\u232B' : key;
            if (key === 'ENTER' || key === 'BACK') {
                btn.classList.add('wg-key--wide');
            }
            btn.addEventListener('click', () => handleKeyInput(key));
            rowDiv.appendChild(btn);
        });
        keyboard.appendChild(rowDiv);
    });
}

// ============================================
// INPUT HANDLING
// ============================================

function handleKeyInput(key) {
    if (gameState !== 'playing' || isRevealing) return;

    if (key === 'BACK') {
        currentGuess = currentGuess.slice(0, -1);
        updateCurrentRow();
        return;
    }

    if (key === 'ENTER') {
        submitGuess();
        return;
    }

    if (currentGuess.length < WORD_LENGTH && /^[A-Z]$/.test(key)) {
        currentGuess += key;
        updateCurrentRow();
    }
}

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const key = e.key.toUpperCase();
    if (e.key === 'Enter') handleKeyInput('ENTER');
    else if (e.key === 'Backspace') handleKeyInput('BACK');
    else if (/^[A-Z]$/.test(key)) handleKeyInput(key);
});

// ============================================
// DISPLAY HELPERS
// ============================================

function updateCurrentRow() {
    const row = document.querySelector(`.wg-row[data-row="${currentRow}"]`);
    if (!row) return;
    const tiles = row.querySelectorAll('.wg-tile');
    tiles.forEach((tile, i) => {
        const letter = currentGuess[i] || '';
        tile.textContent = letter;
        if (letter) {
            tile.classList.add('wg-tile--filled');
        } else {
            tile.classList.remove('wg-tile--filled');
        }
    });
}

function showMessage(text) {
    const bar = document.getElementById('messageBar');
    if (!bar) return;
    bar.textContent = text;
    bar.classList.add('wg-message--visible');
    clearTimeout(showMessage._timer);
    showMessage._timer = setTimeout(() => {
        bar.classList.remove('wg-message--visible');
    }, 1500);
}

function shakeRow(rowIndex) {
    const row = document.querySelector(`.wg-row[data-row="${rowIndex}"]`);
    if (!row) return;
    row.classList.add('wg-row--shake');
    setTimeout(() => row.classList.remove('wg-row--shake'), 600);
}

// ============================================
// GUESS SUBMISSION
// ============================================

function submitGuess() {
    if (currentGuess.length !== WORD_LENGTH) {
        showMessage('Not enough letters');
        shakeRow(currentRow);
        return;
    }

    if (!VALID_SET.has(currentGuess)) {
        showMessage('Not in word list');
        shakeRow(currentRow);
        return;
    }

    const evaluation = evaluateGuess(currentGuess, targetWord);
    guesses.push(currentGuess);
    isRevealing = true;

    revealRow(currentRow, currentGuess, evaluation, () => {
        updateKeyboardColors(currentGuess, evaluation);
        isRevealing = false;

        if (currentGuess === targetWord) {
            gameState = 'won';
            saveState();
            setTimeout(() => showResultOverlay(), 600);
            return;
        }

        currentRow++;
        if (currentRow >= MAX_GUESSES) {
            gameState = 'lost';
            saveState();
            setTimeout(() => showResultOverlay(), 600);
            return;
        }

        currentGuess = '';
        saveState();
    });
}

// ============================================
// TILE REVEAL ANIMATION
// ============================================

function revealRow(rowIndex, word, evaluation, onComplete) {
    const row = document.querySelector(`.wg-row[data-row="${rowIndex}"]`);
    if (!row) { if (onComplete) onComplete(); return; }
    const tiles = row.querySelectorAll('.wg-tile');

    tiles.forEach((tile, i) => {
        setTimeout(() => {
            tile.classList.add('wg-tile--flip');

            setTimeout(() => {
                tile.classList.add(`wg-tile--${evaluation[i]}`);
                tile.classList.add('wg-tile--revealed');
                tile.textContent = word[i];
            }, 250);

            if (i === WORD_LENGTH - 1 && onComplete) {
                setTimeout(onComplete, 500);
            }
        }, i * 300);
    });
}

// ============================================
// KEYBOARD COLORS
// ============================================

function updateKeyboardColors(guess, evaluation) {
    for (let i = 0; i < WORD_LENGTH; i++) {
        const letter = guess[i];
        const state = evaluation[i];
        const current = keyColors[letter];

        if (!current ||
            (current === 'absent' && state !== 'absent') ||
            (current === 'present' && state === 'correct')) {
            keyColors[letter] = state;
        }
    }

    document.querySelectorAll('.wg-key').forEach(btn => {
        const letter = btn.dataset.key;
        if (keyColors[letter]) {
            btn.className = 'wg-key wg-key--' + keyColors[letter];
            if (letter === 'ENTER' || letter === 'BACK') {
                btn.classList.add('wg-key--wide');
            }
        }
    });
}

// ============================================
// RESULT OVERLAY & COUNTDOWN
// ============================================

function showResultOverlay() {
    const overlay = document.getElementById('resultOverlay');
    const title = document.getElementById('resultTitle');
    const msg = document.getElementById('resultMessage');
    const word = document.getElementById('resultWord');
    if (!overlay) return;

    word.textContent = targetWord;

    if (gameState === 'won') {
        const phrases = ['Genius!', 'Magnificent!', 'Impressive!', 'Splendid!', 'Great!', 'Phew!'];
        title.textContent = phrases[Math.min(guesses.length - 1, phrases.length - 1)];
        msg.textContent = `You found the word in ${guesses.length}/${MAX_GUESSES} guesses.`;
    } else {
        title.textContent = 'Better luck tomorrow';
        msg.textContent = 'The word eluded you this time.';
    }

    overlay.style.display = 'flex';
    startCountdown();
}

function startCountdown() {
    const timerEl = document.getElementById('nextWordTimer');
    if (!timerEl) return;

    function tick() {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const diff = tomorrow - now;
        const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
        const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
        timerEl.textContent = `${h}:${m}:${s}`;
    }
    tick();
    setInterval(tick, 1000);
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    buildBoard();
    buildKeyboard();

    const saved = loadState();
    if (saved) {
        guesses = saved.guesses;
        gameState = saved.state;
        currentRow = guesses.length;

        guesses.forEach((word, rowIdx) => {
            const evaluation = evaluateGuess(word, targetWord);
            const row = document.querySelector(`.wg-row[data-row="${rowIdx}"]`);
            if (!row) return;
            const tiles = row.querySelectorAll('.wg-tile');
            tiles.forEach((tile, i) => {
                tile.textContent = word[i];
                tile.classList.add(`wg-tile--${evaluation[i]}`);
                tile.classList.add('wg-tile--revealed');
            });
            updateKeyboardColors(word, evaluation);
        });

        if (gameState !== 'playing') {
            setTimeout(() => showResultOverlay(), 400);
        }
    }
}

init();

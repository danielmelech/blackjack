const suites = ["clubs", "diamonds", "hearts", "spades"];

const heartsMap = new Map([
  ["Two", "🂲"],
  ["Three", "🂳"],
  ["Four", "🂴"],
  ["Five", "🂵"],
  ["Six", "🂶"],
  ["Seven", "🂷"],
  ["Eight", "🂸"],
  ["Nine", "🂹"],
  ["Ten", "🂺"],
  ["Jack", "🂻"],
  ["Queen", "🂽"],
  ["King", "🂾"],
  ["Ace", "🂱	"]
]);

const diamondsMap = new Map([
  ["Two", "🃂"],
  ["Three", "🃃"],
  ["Four", "🃄"],
  ["Five", "🃅"],
  ["Six", "🃆"],
  ["Seven", "🃇"],
  ["Eight", "🃈"],
  ["Nine", "🃉"],
  ["Ten", "🃊"],
  ["Jack", "🃋"],
  ["Queen", "🃍"],
  ["King", "🃎"],
  ["Ace", "🃁"]
]);

const spadesMap = new Map([
  ["Two", "🂢"],
  ["Three", "🂣"],
  ["Four", "🂤"],
  ["Five", "🂥"],
  ["Six", "🂦"],
  ["Seven", "🂧"],
  ["Eight", "🂨"],
  ["Nine", "🂩"],
  ["Ten", "🂪"],
  ["Jack", "🂫"],
  ["Queen", "🂭"],
  ["King", "🂮"],
  ["Ace", "🂡"]
]);

const clubsMap = new Map([
  ["Two", "🃒"],
  ["Three", "🃓"],
  ["Four", "🃔"],
  ["Five", "🃕"],
  ["Six", "🃖"],
  ["Seven", "🃗"],
  ["Eight", "🃘"],
  ["Nine", "🃙"],
  ["Ten", "🃚"],
  ["Jack", "🃛"],
  ["Queen", "🃝"],
  ["King", "🃞"],
  ["Ace", "🃑"]
]);

function getCharacterMapBySuite(suite) {
  switch (suite) {
    case "diamonds":
      return diamondsMap;
    case "spades":
      return spadesMap;
    case "clubs":
      return clubsMap;
    case "hearts":
    default:
      return heartsMap;
  }
}

export { suites, getCharacterMapBySuite };

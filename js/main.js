const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "img/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "img/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "img/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "img/icon-visual.svg"
  }
];

document.addEventListener("DOMContentLoaded", (event) => {
  const elStatsList = document.querySelector('.stats-list');
  const elStatsContentFragment = document.createDocumentFragment();

  data.forEach( function (item) {
    const elStatsItem = document.createElement('li');
    elStatsItem.classList.add('stats-list__item', `stats-list__item--${item.category.toLowerCase()}`);

    const elStatsItemImg = document.createElement('img');
    elStatsItemImg.classList.add('stats-list__item-icon');
    elStatsItemImg.src = item.icon;
    elStatsItemImg.width = "20";
    elStatsItemImg.height = "20";

    const elStatsItemTitle = document.createElement('span');
    elStatsItemTitle.classList.add('stats-list__item-title');
    elStatsItemTitle.textContent = item.category;

    const elStatsItemScore = document.createElement('span');
    elStatsItemScore.classList.add('stats-list__item-result');
    elStatsItemScore.textContent = item.score;

    const elStatsItemPercentLabel = document.createElement('span');
    elStatsItemPercentLabel.classList.add('stats-list__item-percent-label');
    elStatsItemPercentLabel.textContent = "%";

    const elStatsItemMax = document.createElement('span');
    elStatsItemMax.classList.add('stats-list__item-max');
    elStatsItemMax.textContent = "/ 100";
    
    elStatsItem.appendChild(elStatsItemImg);
    elStatsItem.appendChild(elStatsItemTitle);
    elStatsItem.appendChild(elStatsItemScore);
    elStatsItem.appendChild(elStatsItemPercentLabel);
    elStatsItem.appendChild(elStatsItemMax);

    elStatsContentFragment.appendChild(elStatsItem); 
  });

   elStatsList.appendChild(elStatsContentFragment);
})
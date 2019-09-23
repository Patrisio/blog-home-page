function init() {
    var mobMenu = document.querySelector('.js-mob-menu'),
        mobMenuIcon = document.querySelector('.js-mob-menu-icon'),
        modalIcon = document.querySelector('.js-modal__icon'),
        modal = document.querySelector('.js-modal'),
        tabs = document.querySelectorAll('.js-tabs__item'),
        tabsStripe = document.querySelector('.tabs__stripe'),
        preloader = document.querySelector('.js-preloader'),
        tagsBox = document.querySelector('.js-tags'),
        tagsList = document.querySelectorAll('.js-tags__item'),
        loadPostsBtn = document.querySelector('.js-load-posts'),
        articlesBox = document.querySelector('.js-articles-container'),
        tagsBtn = document.querySelector('.js-tags__item:last-child'),
        accordionHeader = document.querySelectorAll('.accordion__header'),
        postsList = [
            {
                title: 'Кейс от клиента Roistat: «Я как будто надел очки и увидел все детали»',
                data: '30 июля 2019',
                views: 123,
                tags: [
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText
                ]
            },
            {
                title: 'Кейс от клиента Roistat: «Я как будто надел очки и увидел все детали»',
                data: '30 июля 2019',
                views: 123,
                tags: [
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText
                ]
            },
            {
                title: 'Кейс от клиента Roistat: «Я как будто надел очки и увидел все детали»',
                data: '30 июля 2019',
                views: 123,
                tags: [
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText
                ]
            },
            {
                title: 'Кейс от клиента Roistat: «Я как будто надел очки и увидел все детали»',
                data: '30 июля 2019',
                views: 123,
                tags: [
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText
                ]
            },
            {
                title: 'Кейс от клиента Roistat: «Я как будто надел очки и увидел все детали»',
                data: '30 июля 2019',
                views: 123,
                tags: [
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText
                ]
            },
            {
                title: 'Кейс от клиента Roistat: «Я как будто надел очки и увидел все детали»',
                data: '30 июля 2019',
                views: 123,
                tags: [
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText,
                    tagsList[getRandomInt(tagsList.length - 1)].innerText
                ]
            },
        ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    setTimeout(function () {
        modal.classList.add('modal--active');
    }, 3000 );

    function calculateTabsStripe() {
        var sum = 0;

        for (var i = 0; i < tabs.length; i++) {
            sum += tabs[i].getBoundingClientRect().width + 30;
        }
        
        return sum;
    }

    if (document.documentElement.clientWidth <= 750) {
        tabsStripe.style.width = calculateTabsStripe() + 'px';
    }

    function initEventListeners() {
        loadPostsBtn.addEventListener('click', function () {
            var $this = this;
            this.innerText = 'Загрузка...';
            this.style.backgroundColor = '#F5F9FF';
            this.style.color = '#000';
            this.style.boxShadow = '-2px 1px 40px rgba(0, 0, 0, 0.2)';
            this.style.display = 'none';
            preloader.style.display = 'flex';
            setTimeout(function () {
                for (var i = 0; i < postsList.length; i++) {
                    var newArticle = document.createElement('article');
                    newArticle.classList.add('article');
                    newArticle.innerHTML = '<div class="article__image"></div><div class="article__description"><h3 class="article__title">' + postsList[i].title + '</h3><div class="article__info"><p class="data">' + postsList[i].data + '</p><div class="views"><div class="views-icon"><img src="img/article-icon.svg" alt=""></div><span class="views--count">' + postsList[i].views + '</span></div></div><div class="article__tags"><span class="article__tag-item">' + postsList[i].tags[0] + '</span><span class="article__tag-item">' + postsList[i].tags[1] + '</span><span class="article__tag-item">' + postsList[i].tags[2] + '</span></div></div>';
                    newArticle.children[0].style.background = 'url(../img/girl.jpg)'
                    articlesBox.appendChild(newArticle);
                    $this.innerText = 'Загрузить ещё';
                    $this.style.backgroundColor = '#2589FF';
                    $this.style.color = '#fff';
                    $this.style.display = 'block';
                    preloader.style.display = 'none';
                }
            }, 2000)
        });
        
        accordionHeader.forEach(function (item) {
            item.addEventListener('click', function () {
                if (this.nextElementSibling.classList.contains('hide')) {
                    this.nextElementSibling.classList.remove('hide');
                    return;
                };

                this.nextElementSibling.classList.add('hide');
            });
        })

        mobMenuIcon.addEventListener('click', function () {
            if (mobMenu.classList.contains('active')) {
                mobMenu.classList.remove('active');
                mobMenuIcon.classList.remove('mob-menu-icon--active');
                return;
            }
            mobMenu.classList.add('active');
            mobMenuIcon.classList.add('mob-menu-icon--active');
        });

        modalIcon.addEventListener('click', function () {
            modal.classList.remove('modal--active');
        });

        tabs.forEach(function (item) {
            item.addEventListener('click', function () {
                for (var i = 0; i < tabs.length; i++) {
                    if (tabs[i].classList.contains('active')) {
                        tabs[i].classList.remove('active');
                        tabs[i].borderBottom = 'none';
                    }
                }
    
                this.classList.add('active');
            });
        });

        tagsBtn.addEventListener('click', function () {
            this.remove();
    
            for (var i = 0; i < tagsList.length; i++) {
                var newTag = document.createElement('span');
    
                newTag.classList.add('tags__item');
                newTag.innerHTML = tagsList[i].innerText;
                tagsBox.appendChild(newTag);
            }
    
            var newTagsList = document.querySelectorAll('.tags__item');
    
            newTagsList[newTagsList.length - 1].style.visibility = 'hidden';
        });
    }

    initEventListeners();
}

init();
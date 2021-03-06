module.exports = [
  {
    website: 'https://www.20minutos.es',
    name: '20 Minutos',
    selector: 'section.board-b blq-big article div .media-content header h1 a',
    imageSelector: 'section.board-b blq-big article div figure img',
    //img take src
    country: 'ES'
  },

  {
    website: 'https://www.elconfidencial.com',
    name: 'El Confidencial',
    selector: 'section.opening-1-top h3.fs-60 a',
    country: 'ES'
  },

  {
    website: 'https://www.elmundotoday.com',
    name: 'El Mundo Today',
    selector: 'h3.entry-title  a',
    imageSelector: 'div .entry-thumb',
    // entry-thumb is a span style backround image src= url needed
    country: 'ES'
  },

  {

    website: 'https://www.elmundo.es',
    name: 'El Mundo',
    selector: 'div.ue-l-cover-grid__block div.size6of12 div.ue-l-cover-grid__unit article.ue-c-cover-content div.ue-c-cover-content__body div.ue-c-cover-content__main header.ue-c-cover-content__headline-group a.ue-c-cover-content__link h2.ue-c-cover-content__headline',
    country: 'ES'
  },

  {
    website: 'https://elpais.com',
    name: 'El Pais',
    selector: 'article.articulo--primero h2.articulo-titulo a',
    country: 'ES'
  },

  {
    website: 'https://www.elperiodico.com',
    name: 'El Periodico',
    selector: 'section.blockpad h2.fs3 a',
    country: 'ES'
  },

  {
    website: 'https://www.expansion.com',
    name: 'Expansion',
    selector: 'h2.flex-article__heading a.flex-article__heading-link',
    country: 'ES'
  },

  {
    website: 'https://www.lavanguardia.com',
    name: 'La Vanguardia',
    selector: 'section.breakingnews div.col-xs-12 article.tpl-story-first div.story-bottom header.story-header h1.story-header-title a.story-header-title-link',
    country: 'ES'
  },

  {
    website: 'https://www.bbc.com',
    name: 'BBC',
    selector: 'li.media-list__item--1 a.media__link',
    imageSelector: 'li.media-list__item--1 .media__image .responsive-image img',
    // img src
    country: 'UK'
  },

  {
    website: 'https://www.dailymail.co.uk',
    name: 'Daily Mail',
    selector: 'h2.linkro-darkred a',
    imageSelector: '.articletext a img',
    country: 'UK'
  },
  {
    website: 'https://www.standard.co.uk',
    name: 'Standard',
    selector: '.hero-top h2',
    country: 'UK'
  },

  {
    website: 'https://morningstaronline.co.uk',
    name: 'Morning Star Online',
    selector: 'section.second div article header h1',
    imageSelector: 'section.second div article a img',
    country: 'UK'
  },

  {
    website: 'https://www.theguardian.com',
    name: 'The Guardian',
    selector: '.fc-item__container a.js-headline-text',
    imageSelector: ".fc-item__container .fc-item__media-wrapper .fc-item__image-container img",
    country: 'UK'
  },
]
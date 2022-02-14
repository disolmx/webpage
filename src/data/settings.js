const settingsData = () => {
  return {
    home_img: "/img/citlaltepetl.jpg",
    the_event: {
      short_name: "DiSoL",
      full_name: "Día del Software Libre",
      org: "Comunidad de Software Libre de Cd. Serdán"
    },
    team: [
      {
        avatar: "https://pbs.twimg.com/profile_images/1751298288/zzz_400x400.png",
        name: "Edmundo Andrade",
        username: "sietivel",
        social_url: "https://twitter.com/sietivel",
        country: "mx"
      },
      {
        avatar: "/logos/logo-csl.png",
        name: "Miguel Medina",
        username: "miguel_medina",
        social_url: "http://linkedin.com/in/miguel-medina-secundino-bb9153178",
        country: "mx"
      },
      {
        avatar: "https://avatars3.githubusercontent.com/u/31551648?s=400&v=4",
        name: "Fátima del Pilar",
        username: "pilydp",
        social_url: "https://github.com/pilydp",
        country: "mx"
      }
    ],
    venue: {
      lat: 18.9982887,
      lng: -97.465628,
      name: "ITSCS",
      address: "Av. Instituto Tecnológico S/N Junta Auxiliar 'La Gloria', Ciudad Serdán, Puebla, México, C.P. 75520",
      location_url: "https://g.page/TecSerdan?share"
    },
    social: [
      { 
        name: "facebook", 
        url: "https://www.facebook.com/Comunidad-de-Software-Libre-de-Cd-Serd%C3%A1n-308385709194950/", 
        enable: true, 
        img_url: "/social/facebook.svg" 
      }
    ]
  }
}

export default settingsData

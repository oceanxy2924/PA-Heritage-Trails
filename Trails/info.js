const trails = {
    home : {
        name:"Home",
        location:{      
            lat: 1.427737492302623,
            lng: 103.83392954430072
        },
        content:"",
        landmarks:
            [ 
                { 
                    //name: "Chinatown Heritage Centre",
                    name: "Living Room Piano",

                    legend:'CHC',
                    location: { 
                        lat: 1.4277370106711005,
                        lng:  103.83394790192537
            
                    },
                    marker:'assets/chcmarker.png',
                    content:"Get transported back in time and experience the footsteps \n of migrants in the late 19th century of singapore",
                    src:'landmarks/chinatown/chinatownheritagecentre.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Chinatown Heritage Centre</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?CHC'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                },
                { 
                    //name: "Sri Mariamman Temple",
                    name: "Kitchen",
                    legend:'SMT',
                    location:{ 
                        // lat:1.2826974252118535, 
                        // lng: 103.84513546864258,
                        // L
                        // lat: 1.379443, 
                        // lng: 103.849772, 
                        
                        // M
                        lat: 1.4277309775745173,
                        lng: 103.83391236265697
                    },  
                    marker:'assets/smtmarker.png',
                    content:'This hindu temple is the oldest \n and largest of its kind in singapore',
                    src:'landmarks/chinatown/srimariamtemple.html',

                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Sri Maraimman Temple</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?SMT'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                },
                { 
                    //name: "Sri Mariamman Temple",
                    name: "Room",
                    legend:'SMT',
                    location:{ 
                        // lat:1.2826974252118535, 
                        // lng: 103.84513546864258,
                        // L
                        // lat: 1.379443, 
                        // lng: 103.849772, 
                        
                        // M
                        lat:1.3794009611221347,
                        lng: 103.85012540269874,
                    },  
                    marker:'assets/smtmarker.png',
                    content:'This hindu temple is the oldest \n and largest of its kind in singapore',
                    src:'landmarks/chinatown/srimariamtemple.html',

                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Sri Maraimman Temple</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?SMT'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                },
            ],
    },
    nyp : {
        name:"Nanyang Polytechnic",
        location:{      
            lat: 1.3791968, 
            lng: 103.8494984
        },
        content:"",
        landmarks:
            [ 
                { 
                    //name: "Chinatown Heritage Centre",
                    name: "Block A",

                    legend:'CHC',
                    location: { 
                         
                        //lat: 1.2834358522886367, // add here latitude if using static data 
                        //lng: 103.84440228835545, // add here longitude if using static data 

                        lat: 1.37995157775903,
                        lng: 103.8484416575933, 
            
                    },
                    marker:'assets/chcmarker.png',
                    content:"Get transported back in time and experience the footsteps \n of migrants in the late 19th century of singapore",
                    src:'landmarks/chinatown/chinatownheritagecentre.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Chinatown Heritage Centre</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?CHC'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                },
                { 
                    //name: "Sri Mariamman Temple",
                    name: "Block L",
                    legend:'SMT',
                    location:{ 
                        // lat:1.2826974252118535, 
                        // lng: 103.84513546864258,
                        // L
                        // lat: 1.379443, 
                        // lng: 103.849772, 
                        
                        // M
                        lat:1.3794009611221347,
                        lng: 103.85012540269874,
                    },  
                    marker:'assets/smtmarker.png',
                    content:'This hindu temple is the oldest \n and largest of its kind in singapore',
                    src:'landmarks/chinatown/srimariamtemple.html',

                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Sri Maraimman Temple</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?SMT'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
                { 
                    //name: "Masjid Jamae",
                    name: "Block M",
                    legend:'MJ',
                    location:{ 
                        // lat:1.2832659109590843,
                        // lng: 103.84544660487347, 

                        //M
                        // lat:1.3794009611221347,
                        // lng: 103.85012540269874,

                        //L
                        //1.379443, 
                        //103.849772, 
                        lat: 1.3793628141610332,
                        lng: 103.84978754519999,
                    },
                    marker:'assets/mjmarker.png',
                    content:'Established in 1826 it is one of the oldest mosque in \n singapore One of the only six in the \n country that conducts sermons in tamil' ,
                    src:'landmarks/chinatown/masjidjamae.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Masjid Jamae</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?MJ'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
                { 
                    //name: "Tong Heng",
                    name: "Block N",
                    legend:'TH', 
                    location:{ 
                         
                        // lat:1.2816404559768435, 
                        // lng:103.84496985330027, 
                        lat:1.3776231399471603,
                        lng:103.8498214994872,
                    },
                    marker:'assets/thmarker.png',
                    content:'Tong Heng is the oldest confectioneries. \n Witness a story of resilience, \n determination and resourcefulness.' ,
                    src:'landmarks/chinatown/tongheng.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Tong Heng</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?TH'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
                { 
                    //name: "Buddha Tooth Relic",
                    name: "Block P",
                    legend:'BTR',
                    location: { 
                        // lat: 1.2815604059789072, // add here latitude if using static data 
                        // lng: 103.84423719747802, // add here longitude if using static data 
                        lat: 1.3779585864796986,
                        lng: 103.84946173693508,
                    },
                    marker:'assets/btrmarker.png',
                    content:"Experience buddhist temple and museum complex located in the Chinatown district of Singapore. \n The temple's monastics and devotees officially practice Chinese Buddhism.",
                    src:'landmarks/chinatown/buddhatoothrelic.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Buddha Tooth Relic</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?BTR'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
                
                { 
                    // name: "Pagoda Street & Trengannu Street",
                    name: "Block Q",  
                    legend:'PGTST',
                    location:{ 
                         
                        // lat:1.2831788568902647,  
                        // lng:103.84473979738155, 
                        lat:1.3777835535223408,
                        lng:103.84878875372273,
                    },
                    marker:'assets/psmarker.png',
                    content:'Located in Chinatown within the Outram Planning Area in Singapore \n Terengannu Street linking Pagoda Street and Sago Street, \n and is intersected by Temple Street and Smith Street.',
                    src:'landmarks/chinatown/pagodastreet.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Pagoda Street & Trengannu Street</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?PGTST'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                },
                { 
                    //name: "Sago Street",
                    name: "Block R",
                    legend:'SGST', 
                    location:{ 
                       
                        // lat:1.281800536866017,  
                        // lng: 103.84399338201563, 
                        lat:1.37872779371753,
                        lng: 103.84859177017334, 
                    },
                    marker:'assets/ssmarker.png',
                    content:'Singapore largest historic district, serving mainly as a tourist attraction that houses food outlets, bars, retail shops and offices \n with the streets lined up with pushcarts selling a range of souvenirs and street snacks.',
                    src:'landmarks/chinatown/sagostreet.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Sago Street</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?SGST'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
            
                { 
                    //name: "Mural at Mohammed Ali Lane",
                    name: "Block S",
                    legend:'MMAL',
                    location:{ 
                        // lat:1.2827594818546095,  
                        // lng:103.84583411762635, 
                        lat:1.3793866936368708,
                        lng:103.84858581065816,
                        
                    }, 
                    marker:'assets/muralmarker.png',
                    content:'Along Mohammed Ali Lane, you’ll spot a snapshot of history—a quirky scene of Singapore’s street vendors \n from our early years of independence in the 1960s. \n Witness murals that depict the past through the eyes of singaporean artist Yip Yew Chong.',
                    src:'landmarks/chinatown/muralletterwriter.html',
                    contentHTML :
                    '<div id="content" >' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4 class="text-center">Mural at Mohamed Ali Lane</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?MMAL'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                },    
            ],
    },
    chinatown : {
        name:"China Town",
        location:{lat:1.2822180475786821,lng:103.8444213709885},
        content:"",
        landmarks:
            [ 
                { 
                    name: "Chinatown Heritage Centre",
                    legend:'CHC',
                    location: { 
                         
                        lat: 1.2834358522886367, // add here latitude if using static data 
                        lng: 103.84440228835545, // add here longitude if using static data 
            
                    },
                    marker:'assets/chcmarker.png',
                    content:"Get transported back in time and experience the footsteps \n of migrants in the late 19th century of singapore",
                    src:'landmarks/chinatown/chinatownheritagecentre.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Chinatown Heritage Centre</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?CHC'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                },
                { 
                    name: "Sri Mariamman Temple",
                    legend:'SMT',
                    location:{ 
                        lat:1.2826974252118535, 
                        lng: 103.84513546864258,
                    },  
                    marker:'assets/smtmarker.png',
                    content:'This hindu temple is the oldest \n and largest of its kind in singapore',
                    src:'landmarks/chinatown/srimariamtemple.html',

                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Sri Maraimman Temple</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?SMT'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
                { 
                    name: "Masjid Jamae",
                    legend:'MJ',
                    location:{ 
                        
                        lat:1.2832659109590843,
                        lng: 103.84544660487347, 
                    },
                    marker:'assets/mjmarker.png',
                    content:'Established in 1826 it is one of the oldest mosque in \n singapore One of the only six in the \n country that conducts sermons in tamil' ,
                    src:'landmarks/chinatown/masjidjamae.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Masjid Jamae</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?MJ'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
                { 
                    name: "Tong Heng",
                    legend:'TH', 
                    location:{ 
                         
                        lat:1.2816404559768435, 
                        lng:103.84496985330027, 
                    },
                    marker:'assets/thmarker.png',
                    content:'Tong Heng is the oldest confectioneries. \n Witness a story of resilience, \n determination and resourcefulness.' ,
                    src:'landmarks/chinatown/tongheng.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Tong Heng</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?TH'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
                { 
                    name: "Buddha Tooth Relic",
                    legend:'BTR',
                    location: { 
                        lat: 1.2815604059789072, // add here latitude if using static data 
                        lng: 103.84423719747802, // add here longitude if using static data 
            
                    },
                    marker:'assets/btrmarker.png',
                    content:"Experience buddhist temple and museum complex located in the Chinatown district of Singapore. \n The temple's monastics and devotees officially practice Chinese Buddhism.",
                    src:'landmarks/chinatown/buddhatoothrelic.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Buddha Tooth Relic</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?BTR'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
                
                { 
                    name: "Pagoda Street & Trengannu Street", 
                    legend:'PGTST',
                    location:{ 
                         
                        lat:1.2831788568902647,  
                        lng:103.84473979738155, 
                    },
                    marker:'assets/psmarker.png',
                    content:'Located in Chinatown within the Outram Planning Area in Singapore \n Terengannu Street linking Pagoda Street and Sago Street, \n and is intersected by Temple Street and Smith Street.',
                    src:'landmarks/chinatown/pagodastreet.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Pagoda Street & Trengannu Street</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?PGTST'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                },
                { 
                    name: "Sago Street",
                    legend:'SGST', 
                    location:{ 
                       
                        lat:1.281800536866017,  
                        lng: 103.84399338201563, 
                    },
                    marker:'assets/ssmarker.png',
                    content:'Singapore largest historic district, serving mainly as a tourist attraction that houses food outlets, bars, retail shops and offices \n with the streets lined up with pushcarts selling a range of souvenirs and street snacks.',
                    src:'landmarks/chinatown/sagostreet.html',
                    contentHTML :
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Sago Street</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?SGST'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
            
                { 
                    name: "Mural at Mohammed Ali Lane",
                    legend:'MMAL',
                    location:{ 
                        lat:1.2827594818546095,  
                        lng:103.84583411762635, 
                    }, 
                    marker:'assets/muralmarker.png',
                    content:'Along Mohammed Ali Lane, you’ll spot a snapshot of history—a quirky scene of Singapore’s street vendors \n from our early years of independence in the 1960s. \n Witness murals that depict the past through the eyes of singaporean artist Yip Yew Chong.',
                    src:'landmarks/chinatown/muralletterwriter.html',
                    contentHTML :
                    '<div id="content" >' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4 class="text-center">Mural at Mohamed Ali Lane</h4>' +
                    '<div class="text-center" id="bodyContent">' +
                    '<h5>*Distance Away*</h5>'+
                    "<a href='main.html?MMAL'><button class='btn btn-primary'>NAVIGATE</button></a>"+
                    "</div>" +
                    "</div>"
                }, 
            ],
    },    
}

    // chinatown : {
    //     name:"China Town",
    //     location:{      
    //         lat: 1.3791968, 
    //         lng: 103.8494984
    //     },
    //     content:"",
    //     landmarks:
    //         [ 
    //             { 
    //                 //name: "Chinatown Heritage Centre",
    //                 name: "Block A",

    //                 legend:'CHC',
    //                 location: { 
                         
    //                     //lat: 1.2834358522886367, // add here latitude if using static data 
    //                     //lng: 103.84440228835545, // add here longitude if using static data 

    //                     lat: 1.37995157775903,
    //                     lng: 103.8484416575933, 
            
    //                 },
    //                 marker:'assets/chcmarker.png',
    //                 content:"Get transported back in time and experience the footsteps \n of migrants in the late 19th century of singapore",
    //                 src:'landmarks/chinatown/chinatownheritagecentre.html',
    //                 contentHTML :
    //                 '<div id="content">' +
    //                 '<div id="siteNotice">' +
    //                 "</div>" +
    //                 '<h4>Chinatown Heritage Centre</h4>' +
    //                 '<div class="text-center" id="bodyContent">' +
    //                 '<h5>*Distance Away*</h5>'+
    //                 "<a href='main.html?CHC'><button class='btn btn-primary'>NAVIGATE</button></a>"+
    //                 "</div>" +
    //                 "</div>"
    //             },
    //             { 
    //                 //name: "Sri Mariamman Temple",
    //                 name: "Block L",
    //                 legend:'SMT',
    //                 location:{ 
    //                     // lat:1.2826974252118535, 
    //                     // lng: 103.84513546864258,
    //                     // L
    //                     // lat: 1.379443, 
    //                     // lng: 103.849772, 
                        
    //                     // M
    //                     lat:1.3794009611221347,
    //                     lng: 103.85012540269874,
    //                 },  
    //                 marker:'assets/smtmarker.png',
    //                 content:'This hindu temple is the oldest \n and largest of its kind in singapore',
    //                 src:'landmarks/chinatown/srimariamtemple.html',

    //                 contentHTML :
    //                 '<div id="content">' +
    //                 '<div id="siteNotice">' +
    //                 "</div>" +
    //                 '<h4>Sri Maraimman Temple</h4>' +
    //                 '<div class="text-center" id="bodyContent">' +
    //                 '<h5>*Distance Away*</h5>'+
    //                 "<a href='main.html?SMT'><button class='btn btn-primary'>NAVIGATE</button></a>"+
    //                 "</div>" +
    //                 "</div>"
    //             }, 
    //             { 
    //                 //name: "Masjid Jamae",
    //                 name: "Block M",
    //                 legend:'MJ',
    //                 location:{ 
    //                     // lat:1.2832659109590843,
    //                     // lng: 103.84544660487347, 

    //                     //M
    //                     // lat:1.3794009611221347,
    //                     // lng: 103.85012540269874,

    //                     //L
    //                     lat: 1.379443, 
    //                     lng: 103.849772, 
    //                 },
    //                 marker:'assets/mjmarker.png',
    //                 content:'Established in 1826 it is one of the oldest mosque in \n singapore One of the only six in the \n country that conducts sermons in tamil' ,
    //                 src:'landmarks/chinatown/masjidjamae.html',
    //                 contentHTML :
    //                 '<div id="content">' +
    //                 '<div id="siteNotice">' +
    //                 "</div>" +
    //                 '<h4>Masjid Jamae</h4>' +
    //                 '<div class="text-center" id="bodyContent">' +
    //                 '<h5>*Distance Away*</h5>'+
    //                 "<a href='main.html?MJ'><button class='btn btn-primary'>NAVIGATE</button></a>"+
    //                 "</div>" +
    //                 "</div>"
    //             }, 
    //             { 
    //                 //name: "Tong Heng",
    //                 name: "Block N",
    //                 legend:'TH', 
    //                 location:{ 
                         
    //                     // lat:1.2816404559768435, 
    //                     // lng:103.84496985330027, 
    //                     lat:1.3776231399471603,
    //                     lng:103.8498214994872,
    //                 },
    //                 marker:'assets/thmarker.png',
    //                 content:'Tong Heng is the oldest confectioneries. \n Witness a story of resilience, \n determination and resourcefulness.' ,
    //                 src:'landmarks/chinatown/tongheng.html',
    //                 contentHTML :
    //                 '<div id="content">' +
    //                 '<div id="siteNotice">' +
    //                 "</div>" +
    //                 '<h4>Tong Heng</h4>' +
    //                 '<div class="text-center" id="bodyContent">' +
    //                 '<h5>*Distance Away*</h5>'+
    //                 "<a href='main.html?TH'><button class='btn btn-primary'>NAVIGATE</button></a>"+
    //                 "</div>" +
    //                 "</div>"
    //             }, 
    //             { 
    //                 //name: "Buddha Tooth Relic",
    //                 name: "Block P",
    //                 legend:'BTR',
    //                 location: { 
    //                     // lat: 1.2815604059789072, // add here latitude if using static data 
    //                     // lng: 103.84423719747802, // add here longitude if using static data 
    //                     lat: 1.3779585864796986,
    //                     lng: 103.84946173693508,
    //                 },
    //                 marker:'assets/btrmarker.png',
    //                 content:"Experience buddhist temple and museum complex located in the Chinatown district of Singapore. \n The temple's monastics and devotees officially practice Chinese Buddhism.",
    //                 src:'landmarks/chinatown/buddhatoothrelic.html',
    //                 contentHTML :
    //                 '<div id="content">' +
    //                 '<div id="siteNotice">' +
    //                 "</div>" +
    //                 '<h4>Buddha Tooth Relic</h4>' +
    //                 '<div class="text-center" id="bodyContent">' +
    //                 '<h5>*Distance Away*</h5>'+
    //                 "<a href='main.html?BTR'><button class='btn btn-primary'>NAVIGATE</button></a>"+
    //                 "</div>" +
    //                 "</div>"
    //             }, 
                
    //             { 
    //                 // name: "Pagoda Street & Trengannu Street",
    //                 name: "Block Q",  
    //                 legend:'PGTST',
    //                 location:{ 
                         
    //                     // lat:1.2831788568902647,  
    //                     // lng:103.84473979738155, 
    //                     lat:1.3777835535223408,
    //                     lng:103.84878875372273,
    //                 },
    //                 marker:'assets/psmarker.png',
    //                 content:'Located in Chinatown within the Outram Planning Area in Singapore \n Terengannu Street linking Pagoda Street and Sago Street, \n and is intersected by Temple Street and Smith Street.',
    //                 src:'landmarks/chinatown/pagodastreet.html',
    //                 contentHTML :
    //                 '<div id="content">' +
    //                 '<div id="siteNotice">' +
    //                 "</div>" +
    //                 '<h4>Pagoda Street & Trengannu Street</h4>' +
    //                 '<div class="text-center" id="bodyContent">' +
    //                 '<h5>*Distance Away*</h5>'+
    //                 "<a href='main.html?PGTST'><button class='btn btn-primary'>NAVIGATE</button></a>"+
    //                 "</div>" +
    //                 "</div>"
    //             },
    //             { 
    //                 //name: "Sago Street",
    //                 name: "Block R",
    //                 legend:'SGST', 
    //                 location:{ 
                       
    //                     // lat:1.281800536866017,  
    //                     // lng: 103.84399338201563, 
    //                     lat:1.37872779371753,
    //                     lng: 103.84859177017334, 
    //                 },
    //                 marker:'assets/ssmarker.png',
    //                 content:'Singapore largest historic district, serving mainly as a tourist attraction that houses food outlets, bars, retail shops and offices \n with the streets lined up with pushcarts selling a range of souvenirs and street snacks.',
    //                 src:'landmarks/chinatown/sagostreet.html',
    //                 contentHTML :
    //                 '<div id="content">' +
    //                 '<div id="siteNotice">' +
    //                 "</div>" +
    //                 '<h4>Sago Street</h4>' +
    //                 '<div class="text-center" id="bodyContent">' +
    //                 '<h5>*Distance Away*</h5>'+
    //                 "<a href='main.html?SGST'><button class='btn btn-primary'>NAVIGATE</button></a>"+
    //                 "</div>" +
    //                 "</div>"
    //             }, 
            
    //             { 
    //                 //name: "Mural at Mohammed Ali Lane",
    //                 name: "Block S",
    //                 legend:'MMAL',
    //                 location:{ 
    //                     // lat:1.2827594818546095,  
    //                     // lng:103.84583411762635, 
    //                     lat:1.3793866936368708,
    //                     lng:103.84858581065816,
                        
    //                 }, 
    //                 marker:'assets/muralmarker.png',
    //                 content:'Along Mohammed Ali Lane, you’ll spot a snapshot of history—a quirky scene of Singapore’s street vendors \n from our early years of independence in the 1960s. \n Witness murals that depict the past through the eyes of singaporean artist Yip Yew Chong.',
    //                 src:'landmarks/chinatown/muralletterwriter.html',
    //                 contentHTML :
    //                 '<div id="content" >' +
    //                 '<div id="siteNotice">' +
    //                 "</div>" +
    //                 '<h4 class="text-center">Mural at Mohamed Ali Lane</h4>' +
    //                 '<div class="text-center" id="bodyContent">' +
    //                 '<h5>*Distance Away*</h5>'+
    //                 "<a href='main.html?MMAL'><button class='btn btn-primary'>NAVIGATE</button></a>"+
    //                 "</div>" +
    //                 "</div>"
    //             },    
    //         ],
    // },

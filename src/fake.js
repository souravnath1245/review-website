const services = [
    {
        title : 'Piano',
        detail : "It is a musical instrument played using a keybord",
        price : 39,
        img :'',
        time: "8.00 am - 10 am",
        Days: "Saterday, Monday",
        master:'Claudio Arrau'

    },
    {
        title : 'Cello',
        detail : "The cello is used as a solo musical instrument.",
        price : 59,
        img :'',
        time: "12.00 am - 2.00 pm",
        Days: "Sunday, tuesday",
        master:'Luigi Boccherini'

    },
    {
        title : 'Double Bass',
        detail : "The lowest-pitch bowed string instrument",
        price : 49,
        img :"data:image/jpeg;base64,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::",
         time: "10.00 am - 12.00 am",
        Days:" Monday, wednesday",
        master : 'Rick Clunn'

    },
    {
        title : 'Saxophone',
        detail : "The saxophone is a woodwind instrument.",
        price : 69,
        img :'https://www.udiscovermusic.com/wp-content/uploads/2018/10/Portrait-of-Charlie-Parker-Carnegie-Hall-New-York-N.Y.-ca.-1947-Library-Of-Congress-1000.jpg',
        time: "8.00 am - 11.00 am",
        Days: "tuesday, thusday",
        master : 'William P Gottlieb'

    },
    {
        title : 'Voice',
        detail : "It is a type of music performed by one or more singers.",
        price : 29,
        img :'',
        time: "8.00 am - 10.00 am",
        Days: "saterday, thusday",
        master: 'Arijit-sing'

    },
    {
        title : 'Drums',
        detail : "Can pay by striking with the hand or two sticks.",
        price : 59,
        img :'',
        time: "7.00 pm - 10.00 pm",
        Days: "Monday, wednesday",
        master:'Sivamani'

    },
    {
        title : 'Violin',
        detail : "The violin has four strings tuned in perfect fifths.",
        price : 79,
        img :'',
        time: "6.00 pm - 9.00 pm",
        Days: "sunday, wednesday",
        master:'Dwaram Bhavanarayana Rao'

    },
    {
        title : 'Guitar',
        detail : "The guitar is classified as a string instrument",
        price : 79,
        img :'',
        time: "6.00 pm - 9.00 pm",
        Days: "sunday, wednesday",
        master : 'Jimi Hendrix'

    },
    {
        title : 'Flute',
        detail : "The Flute is striking with the hand or two sticks",
        price : 69,
        img :'',
        time: "7.00 pm - 9.00 am",
        Days: "sunday, wednesday",
        muster : 'Hariproshad Chorashiya'

    },
    
]
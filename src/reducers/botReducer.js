const initialData={
    bots:[{
        name:"utility_bot1",
        type:"utility",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot1.jpg'
    },
    {
        name:"utility_bot21",
        type:"utility",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot2.jpg'
    },
    {
        name:"utility_bot3",
        type:"utility",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot3.jpg'
    },
    {
        name:"utility_bot4",
        type:"utility",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot4.jpg'
    },
    {
        name:"utility_bot5",
        type:"utility",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot5.jpg'
    },{
        name:"game_bot1",
        type:"game",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot1.jpg'
    },
    {
        name:"game_bot21",
        type:"game",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot2.jpg'
    },
    {
        name:"game_bot3",
        type:"game",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot3.jpg'
    },
    {
        name:"game_bot4",
        type:"game",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot4.jpg'
    },
    {
        name:"game_bot5",
        type:"game",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot5.jpg'
    },
    {
        name:"productivity_bot1",
        type:"productivity",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot1.jpg'
    },
    {
        name:"productivity_bot21",
        type:"productivity",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot2.jpg'
    },
    {
        name:"productivity_bot3",
        type:"productivity",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot3.jpg'
    },
    {
        name:"productivity_bot4",
        type:"productivity",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot4.jpg'
    },
    {
        name:"productivity_bot5",
        type:"productivity",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot5.jpg'
    },{
        name:"entertainment_bot1",
        type:"entertainment",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot1.jpg'
    },
    {
        name:"entertainment_bot21",
        type:"entertainment",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot2.jpg'
    },
    {
        name:"entertainment_bot3",
        type:"entertainment",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot3.jpg'
    },
    {
        name:"entertainment_bot4",
        type:"entertainment",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot4.jpg'
    },
    {
        name:"entertainment_bot5",
        type:"entertainment",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot5.jpg'
    },{
        name:"music_bot1",
        type:"music",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot1.jpg'
    },
    {
        name:"music_bot21",
        type:"music",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot2.jpg'
    },
    {
        name:"music_bot3",
        type:"music",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot3.jpg'
    },
    {
        name:"music_bot4",
        type:"music",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot4.jpg'
    },
    {
        name:"music_bot5",
        type:"music",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot5.jpg'
    },
]
}

function botReducer(state = initialData, action) {
  return state
}

export default botReducer
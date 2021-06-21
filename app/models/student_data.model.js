module.exports = (sequelize, Sequelize)=>{
    const Student_data = sequelize.define("posts",{

        Date_Text:{
            type: Sequelize.DATE(6),
        },
        Language:{
            type: Sequelize.STRING
        },
        Post_Type:{
            type: Sequelize.STRING
        },
        Publisher:{
            type: Sequelize.STRING
        },
        Title:{
            type: Sequelize.STRING
        },
        Category:{
            type: Sequelize.STRING
         },
        //  Description: {
        //     type: Sequelize.STRING
        // },
        mediaType:{
            type: Sequelize.STRING
        },
        Viewes:{
            type: Sequelize.STRING
        },
        Reads:{
            type: Sequelize.STRING
        },
        Likes:{
            type: Sequelize.STRING
        },
        Comments:{
            type: Sequelize.STRING
         },
         Shares: {
            type: Sequelize.STRING
        },
       
    },
    {
        timestamps: false
    });

    return Student_data;
};


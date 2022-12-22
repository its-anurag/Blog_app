const knex=require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"Anurag@123",
        database:"blogapp"
    }
})
const AllTable = ()=>{
    knex.schema.createTable("user",(table)=>{
        table.increments("id").primary()
        table.string("name")
        table.string("email").unique()
        table.string("password")
    }).then(()=>{
        console.log({massage:"table create"})
    }).catch(()=>{
        console.log({massage:"table already created"})})
    
    
    knex.schema.createTable("blogPosts",(table)=>{
        table.increments("id").primary()
        table.string("Name")
        table.string('Posts')
    }).then(()=>{
        console.log({massage:"table create"});
    }).catch(()=>{
        console.log({massage:"table already created"});
    })

    knex.schema.createTable("likeDislike",(table)=>{
        table.increments("postid").primary()
        table.integer("user_ID")
        table.boolean('like').notNullable()
        table.boolean('Dislike').notNullable()
    }).then(()=>{
        console.log({massage:"table create"});
    }).catch((err)=>{
    console.log({massage:"table already created"});
    })
    
}
AllTable()

module.exports=knex
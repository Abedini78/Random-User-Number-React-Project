import React, { useEffect, useState } from "react"

export const UserContext=React.createContext({
    ListOfUsers:[],
    FlageModalLoader:false,
    AddItem:()=>{}
})



export const UserContextProvider=(props)=>{
    const[ListOfUsers,setListOfUsers]=useState([])
    const[FlageModalLoader,setFlageModalLoader]=useState(false)
    
    const onAddItem=()=>{
        GetUser()
    }

    async function GetUser(){
        setFlageModalLoader(per=>{return !per})
        try{
            let res=await fetch('https://randomuser.me/api/')
            let data=await res.json()
            setListOfUsers(perList=>{return [...perList,data.results[0]]})
            console.log(FlageModalLoader)
        }
        catch(err){
            setFlageModalLoader(per=>{return !per})
        }
        setFlageModalLoader(per=>{return !per})

    }

    const obj={
        ListOfUsers:ListOfUsers,
        FlageModalLoader:FlageModalLoader,
        AddItem:onAddItem
    }
    return(
        <UserContext.Provider value={obj}>
            {props.children}
        </UserContext.Provider>
    )
}
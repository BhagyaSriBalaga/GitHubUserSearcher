
            // let inpu=document.getElementsById("input").value;
        let input=document.getElementById("input");
        // let avatar=document.getElementById("avatar")
        let avatar=document.getElementsByTagName("img")[0];
        let bio=document.getElementsByTagName("p")[0];
        let userName=document.getElementsByTagName("label")[0];
        let followers=document.getElementsByTagName("span")[0];
        let following=document.getElementsByTagName("span")[1];
        let repos=document.getElementsByTagName("span")[2];
        let profileLink=document.getElementsByTagName("a")[0];

        let userInfo=document.getElementsByClassName("userDetails");
        

        async function submitUser(){

            let api=await fetch("https://api.github.com/users/"+input.value)
            // console.log(api)
            let data=await api.json()
            // console.log(data)
            // console.log(data.avatar_url)
            // console.log("Usernaeeeee",userName.innerHTML)
        // console.log(input.value)
        // let name=document.getElementById("userDetails");
        // console.log(name);
        // console.log(avatar);
        // console.log("wweer",profileLink);
        // console.log(followers.innerHTML)
        // console.log(userInfo);
        avatar.src=data.avatar_url;
        userName.innerText=input.value;
        bio.innerHTML=data.bio;
        followers.innerText=data.followers+" ";
        following.innerText=data.following+" ";
        repos.innerHTML=data.public_repos+" ";
        profileLink.href="https://github.com/"+input.value;
        input.value="";
        userInfo[0].style.display="inline";
        console.log("xcvbn",userInfo[0]);

        }

        



        
        
        // fetch("https://api.github.com/users")
        // .then(res=>res.json())
        // .then(data=>console.log(data))
        // let src=data[0].avatar_url;
        // console.log(src);
        // console.log(data.user_url)

        // fetch("https://api.github.com/users")
        // async function git(){

        //     let api=await fetch("https://api.github.com/users/BhagyaSri08")
        //     // console.log(api)
        //     let data=await api.json()
        //     console.log(data)
        //     console.log(data.avatar_url)
        // } 
        // git()

        // async function git(){
        //     let api=await fetch("https://api.github.com/users")
        //     // console.log(api)
        //     let data=await api.json()
        //     console.log(data)
        // } 
        // git()

        
        

       


        

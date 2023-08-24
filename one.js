/*Imagine you are working for a social media company. You have a list of all the users.your job is to create
a function that checks if a specific username is  in that list.The function should take the username as input an tell you whether it's
present in the list of users or not. */


const listofusers = ["Rahul", "Sahil", "Gopal", "Ajay", "Virat", "Sonia", "Kuldeep", "Rajesh", "Noman", "Hitesh"];

function userpresent(users){
  if (listofusers.includes(users)) {
    console.log(`Yes, ${users} is a valid user.`)
  }
  else{
    console.log(`No, ${users} is not a valid user.`)
  }
}

userpresent("Rahul")
userpresent("someone")
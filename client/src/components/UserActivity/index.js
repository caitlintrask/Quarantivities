import React, { useState } from "react";
import API from "../../utils/API";
import "./style.css";

export function UserActivity () {
    
    const [userInput, setUserInput] = useState({
        title: "",
        description: "", 
        href: "",
        likes: 0,
        category: "",
        titleErr: "",
        desErr: "",
        urlErr: ""
    }); 

    function validate () {
        let titleErr= ""
        let desErr= ""
        let urlErr= ""
        if (document.getElementById("titlesubmit").value === "") {
            titleErr = "Please enter a title for your activity"
            // alert(titleErr);
        }

        if (document.getElementById("dessubmit").value ==="") {
            desErr= "Please enter a description of your activity"
            // alert(desErr);
        }

        if (document.getElementById("urlsubmit").value ==="") {
            urlErr= "Please enter a link to your activity"
            // alert(urlErr);
        }

        if (titleErr || desErr || urlErr) {
            setUserInput({titleErr, desErr, urlErr})
            console.log(userInput);
            return false;
        }
        return true;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const isValid = validate()

        if (isValid) {
            setUserInput({...userInput, titleErr: "", desErr: "", urlErr: ""})
            console.log(userInput);

            let newActivity = {
                title: document.getElementById("titlesubmit").value,
                description: document.getElementById("dessubmit").value, 
                href: document.getElementById("urlsubmit").value,
                likes: 0,
                category: document.getElementById("categorysubmit").value,
            }
            
            API.setActivity(newActivity)
            .then(res => {
                console.log("res", res)
            })
            .catch(err => console.log(err))
        }
    }

    return(
        <form>
           <input type="text" className="form-control" placeholder="Activity Title" id="titlesubmit" name="title" />
           {userInput.titleErr ? (<div style={{ fontsize: 12, color: "red"}}name="titleErr">{userInput.titleErr}</div> ) : null}
           <input type="text" className="form-control" placeholder="Description" name="title" id="dessubmit" />
           {userInput.desErr ? (<div style={{ fontsize: 12, color: "red"}}name="desErr">{userInput.desErr}</div> ) : null}
           <input type="text" className="form-control" placeholder="URL" name="url" id="urlsubmit" />
           {userInput.urlErr ? (<div style={{ fontsize: 12, color: "red"}}name="urlErr">{userInput.urlErr}</div> ) : null}
           <p>Select a Category: </p>
            <div className="form-group">
            <select className="form-control" id="categorysubmit">
                <option>Cooking</option>
                <option>Crafts</option>
                <option>Random</option>
                <option>Fitness</option>
            </select>
            </div>
            <button type="submit" onClick={handleFormSubmit}>Add Activity</button>
        </form>
    )
}


export function UserTitle ({ title, href }) {
    return (
        <>
            {/* <p className="card-text" href={href}>{title}</p> */}
            <a href={href} target="blank">{title}</a>
        </>
        );
    }
    
// export default UserActivity;
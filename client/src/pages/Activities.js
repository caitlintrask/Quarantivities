import React, {useState, useEffect } from "react";
// import ActivityCard from "../components/Card";
import UserActivity from "../components/UserActivity";
import API from "../utils/API";
import DeveloperContext from "../utils/CardContext";
import SMSForm from "../components/SMS";
import { CardList, CardListItem } from "../components/CardList";

function Activity () {

  const [activity, setActivity] = useState({
    title: "",
    thumbnail: "",
    description: "",
    href: "",
    likes: 0,
    category: ""
  });
  
  const [activities, setActivities] = useState([]);

      useEffect(() => {
        loadActivities();
      }, []);
      
      console.log("useeffect", activities)

      const categoryName = localStorage.getItem("category")

      function loadActivities() {
        API.fetchActivity(categoryName)
        .then(dbactivity => {
          console.log(dbactivity);
          // setActivity(...activity, activity);
          setActivities(dbactivity.data);
        })
        .catch(err => console.log(err))
    }

    // the code below is modeled from activity two in week 21 MERN
    //I am not sure if we still need the developer context if we use the code below

        return (
            <div className ="container">
               <DeveloperContext.Provider value={activity}>
                <div>
                    {!activities.length ? (
                    <h1 className="text-center">No Activities to Display</h1>
                    ) : (
                    <CardList>
                      {activities.map(activity => {
                        return (
                          <CardListItem
                            key={activity._id}
                            id={activity._id}
                            title={activity.title}
                            href={activity.href}
                            description={activity.description}
                            thumbnail={activity.thumbnail}
                            likes={activity.likes}
                            category={activity.category}
                          />
                      );
                    })}
                  </CardList>
                )}
                </div>
                <SMSForm />
                <UserActivity />
                </DeveloperContext.Provider>
            </div>
            
        )
}
export default Activity;
<template>
    <div class="row">
        <div class="message pull-right">
            <img class="background" :src="background" alt="backgroundImage">
            {{ msg }}
        </div>
        <div id="profileColumn" class="col-md-6 col-sm-offset-1 jumbotron">
            <h1 id="username">{{$route.params.id}}</h1>
            <div>
                <img id="profileImg" v-bind:src='profileImg' class="pull-left">
                <div>
                    <p id="profText">Gender: {{user.gender}}</p>
                </div>
                <div>
                    <p id="profText">Age: {{user.age}}</p>
                </div>
                <div>
                    <p id="profText">Location: {{user.location}}</p>
                </div>
                <div>
                    <p id="profText">Description: {{user.description}}</p>
                </div>
<!--                 <div id="editButton">
                    <span><button class="glyphicon glyphicon-cog" v-if='this.$store.state.user.username' v-on:click='editProfile'></button></span>
                </div> -->
                <div id="adminButton" v-if="admin">
                <button class="btn btn-primary" v-on:click='goToAdmin'>Admin</button>
                </div>
            </div>
        </div>
        <div class="col-md-9 col-sm-offset-6" id="my-events">
            <div>
                <div v-if="match" id="eventColumn" class="col-md-7 col-md-offset-2">
                    <div>
                        <h2 class="overhead">Suggested Events:</h2>
                        <div class="suggested-events-list">
                            <ul v-for='event in allEvents'>
                                <div id="event" class="row">
                                    <a v-on:click="toDate(event)" id="clickEvent">
                                        <li id="eventDetails"> {{ moment(event.date).format('MMMM Do YYYY, h:mm:ss a') }} </li>
                                        <li id="eventDetails"> {{ event.eventName }} </li>
                                        <li id="eventDetails"> {{ event.eventType }} </li>
                                        <li id="eventDetails">Go on date<button id="eventButton" class="glyphicon glyphicon-menu-right glyphicon glyphicon-glass" v-on:click="toDate(event)"></button></li>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div id="eventColumn" class="col-md-5">
                        <div>
                            <h2 class="overhead">My Events:</h2>
                            <ul v-for='event in events'>
                                <div id="event" class="row">
                                    <a id="clickEvent">
                                        <li id="eventDetails"> {{ moment(event.date).format('MMMM Do YYYY, h:mm:ss a') }} </li>
                                        <li id="eventDetails"> {{ event.eventName }} </li>
                                        <li id="eventDetails"> {{ event.eventType }} </li>
                                        <li id="eventDetails">Go on date<button id="eventButton" class="glyphicon glyphicon-menu-right glyphicon glyphicon-glass"></button></li>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="smbutton">
            <button class="btn btn-primary pull-right" v-on:click="goToEvents">See More</button> 
        </div>
        <div class="col-md-9 col-sm-offset-6" id="divsg">
            <div>
                <div v-if="match" id="eventColumnSg" class="col-md-9 col-md-offset-5">
                    <div>
                        <h2 class="overhead">My Events:</h2>
                        <ul v-for='event in savedEvents'>
                            <div id="event" class="row">
                                <a v-on:click="toDate(event)" id="clickEvent">
                                    <li id="eventDetails"> {{ moment(event.date).format('MMMM Do YYYY, h:mm:ss a') }} </li>
                                    <li id="eventDetails"> {{ event.eventName }} </li>
                                    <li id="eventDetails"> {{ event.eventType }} </li>
                                    <li id="eventDetails">Go on date<button id="eventButton" class="glyphicon glyphicon-menu-right glyphicon glyphicon-glass" v-on:click="toDate(event)"></button></li>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
h2.overhead {
    color: black;
}
.message.pull-right {
    background-color: transparent;
    font-size: 35px;
    font-weight: bold;
    color: black;
    margin-bottom: 0;
}
#profText {
    color: black;
}
#clickEvent {
    display: block;
    width: 95%;
    height: 100%;
    color: black;
    padding-left: 15px;
}
#eventDetails {
    list-style-type: none;
    padding-left: 10px;
    margin-right: 0;
}
#username {
    color: black;
    margin-top: 10px;
}
#profileColumn {
    position: absolute;
    background-color: rgb(227, 226, 226);
    margin-left: 45px;
    margin-top: 70px;
    border-radius: 10px;
}
#eventColumn, #myEvent {
    background-color: rgba(77, 79, 80, 0.9);
    border-radius: 10px;
}
#eventColumn {
    margin-left: 60px;
    /*margin-top: 380px;*/
    margin-right: 30px;
}
#matchHorizon {
    border: 3px solid red;
}
#editButton {
    float: right;
    size: 80%;
    /*color:#75B2E1;*/
}
#profileImg {
    width: 40%;
    padding-bottom: 5px;
    margin-right: 15px;
}
#event {
    background-color: #F3F1F1;
    padding-top: 2px;
    padding-bottom: 2px;
    color: black;
    width: 420px;
    border-radius: 10px;
    margin-left: 22px;
}
.suggested-events-list {
    height: 280px;
    overflow-y: auto;
    margin-bottom: 15px;
}
/*#eventDetails:nth-child(even) {
    border: 1px solid tomato;
    background-color: white;
    padding-top: 2  px;
    padding-bottom: 2px;
}
#eventDetails:nth-child(odd) {
    border: 1px solid tomato;
    background-color: black;
    padding-top: 2  px;
    padding-bottom: 2px;
}*/
#eventButton {
    float: right;
    color: #75B2E1;
    padding-bottom: 3px;
    margin-right: 15px;
}
.smbutton {
    padding-right: 34px;
}
#my-events {
    margin-top: 20px;
}
#eventColumnSg {
    background-color: rgba(77, 79, 80, 0.9);
    margin-left: 770px;
    margin-top: 500px;
    position: relative;
    border-radius: 10px;
    width: 600px;
}
#divsg {
    position: absolute;
    margin-left: 0;
}

</style>
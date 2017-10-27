<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                    <!-- 3. Binding with v-model -->
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                    <!-- 5. Using lazy modifier to update on change and not input event
                            More modifiers
                            **************
                            a. trim - trim whitespace
                            b. number - force number types
                     -->
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- 6. Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <!-- 7. Can use css style tag below to keep line breaks-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            style="white-space: pre"
                            v-model="userData.message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                        <!-- 9. v-model to the input. Below both inputs binds to the same prop
                                vue will automatically merge the two values in the array for us -->
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="userData.sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="userData.sendMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                     <!-- 11. Binding to radio buttons with v-model. This automatically fixes the
                     issue where only one can be selected and only one can be stored. All this
                     is done automatically by binding to only one data prop -->
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="userData.gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="userData.gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <!-- 12. Binding with selection boxes. Can use the selected directive to pre
                    select an option - this will not work if you have a default return value
                    in userData.priorities. Note you bind to the select tag. -->
                    <select
                            id="priority"
                            class="form-control"
                            v-model="userData.selectedPriority">
                        <option 
                            v-for="priority in userData.priorities" 
                            :selected="priority == 'Medium'">{{ priority }}
                        </option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                <!-- 4. Display data -->
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p>Message: {{ userData.message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                <!-- 10. Loop through data -->
                            <li v-for="item in userData.sendMail">{{ item }}</li>
                        </ul>
                        <p>Gender: {{ userData.gender }}</p>
                        <p>Priority: {{ userData.selectedPriority }}</p>
                        <p>Switched:</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 1. This is to demonstrate how forms work with v-model
    export default {
        data() {
            return {
// 2. Create your data properties and bind to the form with v-model
                userData: {
                    email: "",
                    password: "",
                    age: 27,
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum inventore repellat ad repellendus. Repellat repellendus commodi, magnam explicabo modi, vero architecto dolor veritatis ab et, ut libero laboriosam ullam!",
// 8. Setting up empty array for the checkboxes to hold an array of mail options
                    sendMail: [],
                    gender: 'Male',
                    priorities: ['High', 'Medium', 'Low'],
                    selectedPriority: 'High'
                }
            }
        }
    }
</script>

<style>

</style>

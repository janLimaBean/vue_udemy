<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                :value="userData.email"
                                @input="userData.email = $event.target.value">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
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
                    <app-switch v-model="userData.dataSwitch"></app-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- 1. Using prevent modifier similar to prevent default stopping the request 
                                reaching out to a server -->
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted"
                    >Submit!
                            
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <!-- 3. Only see data only if submitted is pressed -->
        <div class="row" v-if="userData.isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p>Message: {{ userData.message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in userData.sendMail">{{ item }}</li>
                        </ul>
                        <p>Gender: {{ userData.gender }}</p>
                        <p>Priority: {{ userData.selectedPriority }}</p>
                        <p>Switched: {{ userData.dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from './Switch.vue'
    export default {
        data() {
            return {
                userData: {
                    email: "",
                    password: "",
                    age: 27,
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum inventore repellat ad repellendus. Repellat repellendus commodi, magnam explicabo modi, vero architecto dolor veritatis ab et, ut libero laboriosam ullam!",
                    sendMail: [],
                    gender: 'Male',
                    priorities: ['High', 'Medium', 'Low'],
                    selectedPriority: 'High',
                    dataSwitch: true,
                    isSubmitted: false
                }
            }
        },
        // 2. Creating submit handler
        methods: {
            submitted() {
                this.userData.isSubmitted = true
            }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>

<style>

</style>

new Vue({
	el:"#app",
	data:{
		gameRunning: false,
		humanHealth: 100,
		monsterHealth : 100,
		humanAttackValue :0,
		monsterAttackValue :0,
		logData: [],
	},
	watch:{
		monsterHealth: function(){
			if(this.humanHealth <= 0) {
				alert("Sorry you have lost");
				this.reset();
			}
		},
		humanHealth: function(){
			if(this.monsterHealth <= 0) {
				alert("Great you won!!!");
				this.reset();
			}
		}
	},
	methods:{
		attack:function(min, max){
			return Math.floor(Math.random()*(max-min+1)+min);
		},
		attackType:function(attackType = 1){
			// 1. setting up hitpoints for normal and special attackTypes
			if(attackType === 1){
				this.humanAttackValue = this.attack(1,10);
				this.monsterAttackValue = this.attack(1,10);				
			} else if(attackType === 2) {
				this.humanAttackValue = this.attack(15,20);
				this.monsterAttackValue = this.attack(10,15);
			}
			// 2. remove hitpoints from players
			this.humanHealth = this.humanHealth - this.monsterAttackValue;
			this.monsterHealth = this.monsterHealth - this.humanAttackValue;
			// 3. adding log entry
			this.logData.unshift({"human" : this.humanAttackValue, "monster" : this.monsterAttackValue});
		},
		heal:function(){
			var monsterAttackAfterHeal = this.attack(1,10);
			this.humanHealth = this.humanHealth + 10;
			this.humanHealth = this.humanHealth - monsterAttackAfterHeal

			this.logData.unshift({"human" : 10 , "monster" : monsterAttackAfterHeal});
		},
		reset:function(){
			this.humanHealth = 100;
			this.monsterHealth = 100;
			this.logData = [];
		}
	}
});
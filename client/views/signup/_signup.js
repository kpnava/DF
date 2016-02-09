Template.signup.rendered = function() {
	Session.set('signupRole', '');
}

Template.signup.helpers({
	'isDoctor': function() {
		if (Session.get('signupRole') === 'DOCTOR') {
			return true
		} else {
			return false
		}
	},

	'isPatient': function() {
		if (Session.get('signupRole') === 'PATIENT') {
			return true
		} else {
			return false
		}
	},

	'step1Val':function(){
		if(Session.get('signupRole') === '') {
			return false
		} else {
			return true
		}
	}
})


Template.signup.events({
	'change #doctorRadio': function() {
		Session.set('signupRole','DOCTOR')
	},
	'change #patientRadio': function(){
		Session.set('signupRole','PATIENT')
	}

})
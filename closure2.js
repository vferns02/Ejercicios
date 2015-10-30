function creaUsuario(name){
	return{
		login: function(){
			console.log(name + ' ha hecho login');  //estas funciones utilizan scope de la madre
		},
		setName: function (newName){
			name = newName;
		},
		logout: function(){
			console.log(name + ' ha hecho logout');
		}
	};
}
//creamos el closure
var user = creaUsuario('tesla');
//usamos el closure
user.login(); 
user.setName('neo');

//user.logout();
setTimeout(user.logout,1000); 
//utilizando closures podemos semejar la utilizacion de los this

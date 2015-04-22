#pragma strict

private var anim : Animator;
var speed : float = 1.0;


function Start () {
	anim = GetComponent(Animator);
}

function Update () {

	switch(Mathf.Round(transform.rotation.eulerAngles.y)){
		case 0:
			grado0();
			break;
		case 90:
			grado90();
			break;
		case 180:
			grado180();
			break;
		case 270:
			grado270();
			break;
		default:
			break;
	}
	
	if(Input.GetKeyDown(KeyCode.Q)){
		transform.rotation.eulerAngles += new Vector3(0,90,0);
	}
	
	if(Input.GetKeyDown(KeyCode.E)){
		transform.rotation.eulerAngles += new Vector3(0,-90,0);	
	}

}

function grado0(){
	var move_x : float = Input.GetAxisRaw("Horizontal");
	var move_z : float = Input.GetAxisRaw("Vertical");
	
	var isWalking : boolean = (Mathf.Abs(move_x) + Mathf.Abs(move_z)) > 0;
	
	anim.SetBool("isWalking", isWalking);
	
	if(isWalking){
		anim.SetFloat("x", move_x);
		anim.SetFloat("z", move_z);
		
		transform.position += new Vector3(move_x, 0, move_z).normalized * Time.deltaTime * speed;
	}	
}
function grado90(){
	var move_x : float = Input.GetAxisRaw("Horizontal") * -1;
	var move_z : float = Input.GetAxisRaw("Vertical");
	
	var isWalking : boolean = (Mathf.Abs(move_x) + Mathf.Abs(move_z)) > 0;
	
	anim.SetBool("isWalking", isWalking);
	
	if(isWalking){
		anim.SetFloat("x", move_x * -1);
		anim.SetFloat("z", move_z);
		
		transform.position += new Vector3(move_z, 0, move_x).normalized * Time.deltaTime * speed;
	}
}
function grado180(){
	var move_x : float = Input.GetAxisRaw("Horizontal") * -1;
	var move_z : float = Input.GetAxisRaw("Vertical") * -1;
	
	var isWalking : boolean = (Mathf.Abs(move_x) + Mathf.Abs(move_z)) > 0;
	
	anim.SetBool("isWalking", isWalking);
	
	if(isWalking){
		anim.SetFloat("x", move_x * -1);
		anim.SetFloat("z", move_z * -1);
		
		transform.position += new Vector3(move_x, 0, move_z).normalized * Time.deltaTime * speed;
	}		
}
function grado270(){
	var move_x : float = Input.GetAxisRaw("Horizontal");
	var move_z : float = Input.GetAxisRaw("Vertical") * -1;
	
	var isWalking : boolean = (Mathf.Abs(move_x) + Mathf.Abs(move_z)) > 0;
	
	anim.SetBool("isWalking", isWalking);
	
	if(isWalking){
		anim.SetFloat("x", move_x);
		anim.SetFloat("z", move_z * -1);
		
		transform.position += new Vector3(move_z, 0, move_x).normalized * Time.deltaTime * speed;
	}
}












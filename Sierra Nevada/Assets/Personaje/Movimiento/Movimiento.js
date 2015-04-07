#pragma strict

private var anim : Animator;
var speed : float = 1.0;


function Start () {
	anim = GetComponent(Animator);
}

function Update () {

	var move_x : float = Input.GetAxisRaw("Horizontal");
	var move_y : float = Input.GetAxisRaw("Vertical");
	
	var isWalking : boolean = (Mathf.Abs(move_x) + Mathf.Abs(move_y)) > 0;
	
	anim.SetBool("isWalking", isWalking);
	
	if(isWalking){
		anim.SetFloat("x", move_x);
		anim.SetFloat("y", move_y);
		
		transform.position += new Vector3(move_x, 0, move_y).normalized * Time.deltaTime * speed;
	}
	
	if(Input.GetKeyDown(KeyCode.Q)){
		transform.rotation.eulerAngles += new Vector3(0,90,0);
	}
	
	if(Input.GetKeyDown(KeyCode.E)){
		transform.rotation.eulerAngles += new Vector3(0,-90,0);	
	}

}
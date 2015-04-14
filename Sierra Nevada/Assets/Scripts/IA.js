var distanceFromPlayer;
var target : Transform;
var moveRate : float = 1.0;
var detectionRange : float = 20.0;
var chaseRange : float = 10.0;
var attackRange : float = 5.00;
var speed : float = 1.0;
var damping : float = 3.0;
var attackRate : float = 1.5;
var control : CharacterController;
var gravity : float = 20.0;


var waypoints : Transform[];
private var currentWP : int;
private var distanceFromWP : Vector3;

private var anim : Animator;
private var attackTime : float;
private var isChasing : boolean = false;
private var isPatrolling : boolean = false;
private var isAttacking : boolean = false;
private var isAware : boolean = false;
private var moveDirection : Vector3 = Vector3.zero;


function Start () {
	anim = GetComponent("Animator");
	attackTime = Time.time;
}

function Update () {

	distanceFromPlayer = Vector3.Distance(target.position, transform.position);
	
	if(distanceFromPlayer < detectionRange){
		isPatrolling = false;
		isChasing = false;
		isAttacking = false;
		isAware = true;
		
		Detecting();
	}
	
	if(distanceFromPlayer > detectionRange){
		isPatrolling = true;
		isChasing = false;
		isAttacking = false;
		isAware = false;
		
		Patrolling();
	}
	
	if(distanceFromPlayer < attackRange){
		isPatrolling = false;
		isChasing = false;
		isAttacking = true;
		isAware = false;
		
		Attacking();
	}
	
	else if(distanceFromPlayer < chaseRange){
		isPatrolling = false;
		isChasing = true;
		isAttacking = false;
		isAware = false;
		
		Chasing();
	}
	
}

function Patrolling () {
		
	if(currentWP < waypoints.Length){
	
		distanceFromWP = waypoints[currentWP].position - transform.position;
		//Debug.Log(distanceFromWP.magnitude);
		
		
		if(distanceFromWP.magnitude < 1){
			currentWP++;
		}
		else{
			anim.SetBool("isPatrolling", isPatrolling);
			anim.SetFloat("x", moveRate); 				//Ajustar aca luego la direccion de la animacion con respecto al punto al q se desplaza
			anim.SetFloat("z", moveRate);
			transform.position = Vector3.MoveTowards(transform.position, waypoints[currentWP].position, Time.deltaTime * speed);
		}
	}
	else{
		currentWP = 0;
	}

}

function Detecting () {
		
		Debug.Log("Gabriel detectado");
}

function Chasing () {
		
		Debug.Log("Gabriel perseguido");
		
		//moveDirection = transform.forward;
		moveDirection.x += speed;
		moveDirection.z += speed;
		moveDirection.y -= gravity * Time.deltaTime;
		transform.position = Vector3.MoveTowards(transform.position, target.position, Time.deltaTime * speed);
		//control.Move(moveDirection * Time.deltaTime);
}

function Attacking () {
		
		Debug.Log("Gabriel atacado");
}


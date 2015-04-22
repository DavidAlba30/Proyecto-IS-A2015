#pragma strict

public var enemy : GameObject;
public var range : float;

function Start () {

}

function Update () {
	
	if(Vector3.Distance(transform.position, enemy.transform.position) < range){
		if(Input.GetKeyDown(KeyCode.Mouse0)){
			Debug.Log("Estoy atacando!!!");
			attackEnemy();
		}
	}
}

function attackEnemy(){

	enemy.GetComponent(IA).hitHP(20);
}
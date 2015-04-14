#pragma strict

var Camara : GameObject;

private var Angulo : Transform;

function Start () {
	Angulo = transform;
}

function Update () {
	Angulo.rotation.eulerAngles.y = Camara.transform.rotation.eulerAngles.y;
}
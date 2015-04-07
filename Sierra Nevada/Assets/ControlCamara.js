#pragma strict
  
var cameraTarget : GameObject;
 
var smoothTime : float = 0.8;              // Tiempo de Retraso
private var velocity : Vector3;
private var centerX : float = 0;
private var centerY : float = 7;
private var centerZ : float = -7.5;

private var thisTransform : Transform;    
 
function Start (){
	thisTransform = transform;
}
 
function Update () {
	thisTransform.position.x = Mathf.SmoothDamp (thisTransform.position.x, cameraTarget.transform.position.x + centerX, velocity.x, smoothTime);
	thisTransform.position.z = Mathf.SmoothDamp (thisTransform.position.z, cameraTarget.transform.position.z + centerZ, velocity.z, smoothTime);
	thisTransform.position.y = Mathf.SmoothDamp (thisTransform.position.y, cameraTarget.transform.position.y + centerY, velocity.y, smoothTime);
	 
}
#pragma strict
  
var cameraTarget : GameObject;
 
var smoothTime : float = 0.05;  
var smoothRotation : float = 0.05;
            // Tiempo de Retraso
private var velocity : Vector3;
private var centerX : float = 0;
private var centerY : float = 7;
private var centerZ : float = -7.5;

private var radio : float;

private var thisTransform : Transform;    

private var banX : float;
private var banZ : float;
 
function Start (){
	thisTransform = transform;
	thisTransform.position = new Vector3(cameraTarget.transform.position.x + centerX, cameraTarget.transform.position.y + centerY, cameraTarget.transform.position.z + centerZ);
	thisTransform.rotation.eulerAngles = new Vector3(45,cameraTarget.transform.rotation.y,0);
	
	radio = Mathf.Sqrt(centerX*centerX + centerZ*centerZ);
}
 
function Update () {
	banX = Mathf.Sin((cameraTarget.transform.rotation.eulerAngles.y + 180)*Mathf.PI/180)*radio;
	banZ = Mathf.Cos((cameraTarget.transform.rotation.eulerAngles.y + 180)*Mathf.PI/180)*radio;
	
	thisTransform.position.x = Mathf.SmoothDamp (thisTransform.position.x, cameraTarget.transform.position.x + banX, velocity.x, smoothTime);
	thisTransform.position.z = Mathf.SmoothDamp (thisTransform.position.z, cameraTarget.transform.position.z + banZ, velocity.z, smoothTime);
	thisTransform.position.y = cameraTarget.transform.position.y + centerY;
	
	thisTransform.rotation.eulerAngles.y = Mathf.SmoothDampAngle(thisTransform.eulerAngles.y, cameraTarget.transform.eulerAngles.y, velocity.y, smoothRotation);
	 
}
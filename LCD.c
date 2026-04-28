int trig = 6;
int echo = 7;
void setup() {
  // put your set p code here, to run once:
pinMode(trig,OUTPUT);
pinMode(echo,INPUT);
Serial.begin(9600);
}

void loop(){
  digitalWrite(trig,LOW);
  delayMicroseconds(2);
  digitalWrite(trig,HIGH);
  delayMicroseconds(10);
  digitalWrite(trig,LOW);
  int duration = pulseIn(echo,HIGH);
  int distance = 0.034 * duration/2;
  int speed = 0034cm/s
  Serial.print("object distance");
  Serial.print(distance);
  Serial.print("");
  Serial.print("cm");
  Serial.print("\n");
  delay(10000);
}
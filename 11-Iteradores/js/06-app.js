const pendientes = ['Tarea', 'Comer', 'Entrenar', 'Estudiar'];

pendientes.forEach( (pendiente, index) => console.log(`Índice: ${index}, Tarea pendiente: ${pendiente}`));

const tareasPendientes = pendientes.map( pendiente => console.log(`Tarea: ${pendiente}`));

/* Aclaraciones: El forEach y el map realizan prácticamente lo mismo, con la diferencia de que el .map retorna un nuevo array y el forEach itera sobre cada elemento del array original y no retorna nada. 

    1) ForEach: Utilizamos arrowFunction con () ya que necesitamos dos parámetros y lo hicimos inline.
    2) map: Utilizamos arrowFunction sin () ya que necesitamos un único argumento y lo hicimos inline igualmente.

Para ambos quitamos las llaves {} justamente por ser inline.
*/
// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas
// compruébalo con un ***console.log***.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (const alumn in alumns) {
  if (
    (alumns[alumn].T1 && alumns[alumn].T2) ||
    (alumns[alumn].T1 && alumns[alumn].T3) ||
    (alumns[alumn].T2 && alumns[alumn].T3)
  ) {
    alumns[alumn].isApproved = true;
  } else {
    alumns[alumn].isApproved = false;
  }
}
console.log(alumns);

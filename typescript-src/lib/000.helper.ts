export interface User {
  firstname: string;
  lastname: string;
}

const firstname = 'Max';

export const getUsr = (): User[] => {
  return [{
    firstname,
    lastname: "Haig"
  }, {
    firstname: "Todd",
    lastname: "Scatchard"
  }, {
    firstname: "Gustavo",
    lastname: "Dinsell"
  }, {
    firstname: "Darlleen",
    lastname: "Calder"
  }, {
    firstname: "Valaree",
    lastname: "Sedgman"
  }, {
    firstname: "Allyn",
    lastname: "Hacun"
  }, {
    firstname: "Ardis",
    lastname: "Deave"
  }, {
    firstname: "Rayner",
    lastname: "Bolderson"
  }, {
    firstname: "Kimberley",
    lastname: "Rehor"
  }, {
    firstname: "Butch",
    lastname: "Lyenyng"
  }]
}

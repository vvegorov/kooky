import {
  helper
} from '@ember/component/helper';



export function profileImg(params /*, hash*/ ) {

  let IMG_pof_2 = params;
  let from = IMG_pof_2[0].toString().length - 7;
  let $newstr1 = IMG_pof_2[0].toString().substring(23, from) + ".jpg";
  let $newstr2 = "assets/images/cryptids/"+$newstr1
  return $newstr2;
}

export default helper(profileImg);

// 자바스크립트 프로젝트 구현 - 바디 뷰어 (shapeinfo.js)


// 인터넷에서 다운로드 받은 스크립트

ordering = [
  "waist_circumference_pref_mm",
  "chest_circumference_mm",
  "hip_circumference_maximum_mm",
  "stature_mm",
  "weight_cube_root_kg",
  "inseam_right_mm",
  "fitness_hours",
];
filenames = [
  "waist_circumference_pref_plus_5mm",
  "chest_circumference_plus_5mm",
  "hip_circumference_maximum_plus_5mm",
  "stature_plus_5mm",
  "weight_cube_root_plus_5kg",
  "inseam_right_plus_5mm",
  "fitness_plus_5hours",
];
means = [
  7.564329e2, 9.285578e2, 1.023178e3, 1.64232e3, 3.997508, 7.551578e2, 4.012371,
];
covariance = [
  [
    8.974942e3, 7.55209e3, 6.483763e3, 8.309763e2, 1.881021e1, 1.558322e2,
    -9.556207,
  ],
  [
    7.55209e3, 8.392775e3, 6.396354e3, 7.149492e2, 1.892354e1, 3.602916e1,
    -7.956077,
  ],
  [
    6.483763e3, 6.396354e3, 7.615241e3, 1.194057e3, 1.890881e1, 2.847339e2,
    -1.766251e1,
  ],
  [
    8.309763e2, 7.149492e2, 1.194057e3, 4.746183e3, 5.688103, 2.841976e3,
    1.125533e1,
  ],
  [
    1.881021e1, 1.892354e1, 1.890881e1, 5.688103, 5.485452e-2, 2.377624,
    -1.012215e-2,
  ],
  [
    1.558322e2, 3.602916e1, 2.847339e2, 2.841976e3, 2.377624, 2.142281e3,
    7.67173,
  ],
  [
    -9.556207, -7.956077, -1.766251e1, 1.125533e1, -1.012215e-2, 7.67173,
    9.684213,
  ],
];

if (model_loader != undefined) {
  model_loader.finish_loading_shapeinfo(filenames, means, covariance);
}
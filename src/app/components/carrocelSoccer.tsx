"use client";

import { useState, useRef, useMemo, useCallback } from "react";
import Image from "next/image";

const imagesByCategory: Record<string, string[]> = {
  "07": [
    "07/Inserir um subtítulo - 2024-05-20T182418.952.png",
    "07/Inserir um subtítulo - 2024-05-20T182808.951.png",
    "07/Inserir um subtítulo - 2024-05-20T184451.662.png",
    "07/Inserir um subtítulo - 2024-05-20T184638.676.png",
    "07/Inserir um subtítulo - 2024-05-20T184802.608.png",
    "07/Inserir um subtítulo - 2024-05-20T184931.605.png",
    "07/Inserir um subtítulo - 2024-05-20T185526.560.png",
    "07/Inserir um subtítulo - 2024-05-20T185754.294.png",
    "07/Inserir um subtítulo - 2024-05-20T190022.657.png",
    "07/Inserir um subtítulo - 2024-05-20T190426.657.png",
    "07/Inserir um subtítulo - 2024-05-20T190546.670.png",
    "07/Inserir um subtítulo - 2024-05-20T190753.654.png",
    "07/Inserir um subtítulo - 2024-05-20T191012.640.png",
    "07/Inserir um subtítulo - 2024-05-20T191129.258.png",
    "07/Inserir um subtítulo - 2024-05-23T143637.922.png",
    "07/Inserir um subtítulo - 2024-05-23T144032.040.png",
    "07/Inserir um subtítulo - 2024-05-23T144238.630.png",
    "07/Inserir um subtítulo - 2024-05-23T144415.213.png",
    "07/Inserir um subtítulo - 2024-05-23T144749.351.png",
    "07/Inserir um subtítulo - 2024-05-23T145112.368.png",
    "07/Inserir um subtítulo - 2024-05-23T145302.054.png",
    "07/Inserir um subtítulo - 2024-05-23T145930.018.png",
    "07/Inserir um subtítulo - 2024-05-23T150105.452.png",
    "07/Inserir um subtítulo - 2024-05-23T182928.420.png",
  ],
  "08": [
    "08/Inserir um subtítulo (55).png",
    "08/Inserir um subtítulo (58).png",
    "08/Inserir um subtítulo (59).png",
    "08/Inserir um subtítulo (60).png",
    "08/Inserir um subtítulo (61).png",
    "08/Inserir um subtítulo (62).png",
    "08/Inserir um subtítulo (63).png",
    "08/Inserir um subtítulo (64).png",
    "08/Inserir um subtítulo (65).png",
    "08/Inserir um subtítulo (69).png",
    "08/Inserir um subtítulo - 2024-06-01T094228.168.png",
    "08/Inserir um subtítulo - 2024-06-01T094450.083.png",
  ],
  "09": [
    "09/Inserir um subtítulo (37).png",
    "09/Inserir um subtítulo (38).png",
    "09/Inserir um subtítulo (39).png",
    "09/Inserir um subtítulo (40).png",
    "09/Inserir um subtítulo (41).png",
    "09/Inserir um subtítulo (42).png",
    "09/Inserir um subtítulo (43).png",
    "09/Inserir um subtítulo (44).png",
    "09/Inserir um subtítulo (45).png",
    "09/Inserir um subtítulo (46).png",
    "09/Inserir um subtítulo (47).png",
    "09/Inserir um subtítulo (48).png",
    "09/Inserir um subtítulo (49).png",
    "09/Inserir um subtítulo (50).png",
    "09/Inserir um subtítulo (51).png",
    "09/Inserir um subtítulo (53).png",
    "09/Inserir um subtítulo (54).png",
    "09/Inserir um subtítulo (56).png",
    "09/Inserir um subtítulo - 2024-04-04T190250.249.png",
    "09/Inserir um subtítulo - 2024-04-04T190514.305.png",
    "09/Inserir um subtítulo - 2024-04-04T190645.707.png",
    "09/Inserir um subtítulo - 2024-04-24T153550.020.png",
    "09/Inserir um subtítulo - 2024-04-24T154817.676.png",
    "09/Inserir um subtítulo - 2024-04-24T154930.558.png",
    "09/Inserir um subtítulo - 2024-04-24T155032.590.png",
    "09/Inserir um subtítulo - 2024-04-24T155151.614.png",
    "09/Inserir um subtítulo - 2024-04-24T155837.652.png",
    "09/Inserir um subtítulo - 2024-04-24T155958.591.png",
    "09/Inserir um subtítulo - 2024-04-24T160114.599.png",
    "09/Inserir um subtítulo - 2024-04-24T160232.617.png",
    "09/Inserir um subtítulo - 2024-04-24T160412.585.png",
    "09/Inserir um subtítulo - 2024-04-24T160534.586.png",
    "09/Inserir um subtítulo - 2024-04-24T160651.637.png",
    "09/Inserir um subtítulo - 2024-04-24T160901.612.png",
    "09/Inserir um subtítulo - 2024-04-24T161015.607.png",
    "09/Inserir um subtítulo - 2024-04-24T165332.097.png",
    "09/Inserir um subtítulo - 2024-04-25T182955.508.png",
    "09/Inserir um subtítulo - 2024-04-25T183208.745.png",
    "09/Inserir um subtítulo - 2024-04-25T183334.949.png",
    "09/Inserir um subtítulo - 2024-04-26T144540.040.png",
    "09/Inserir um subtítulo - 2024-05-16T180508.305.png",
    "09/Inserir um subtítulo - 2024-05-24T183410.373.png",
    "09/Inserir um subtítulo - 2024-05-24T184313.534.png",
    "09/Inserir um subtítulo - 2024-06-17T171949.449.png",
    "09/Inserir um subtítulo - 2024-06-17T172358.426.png",
    "09/Inserir um subtítulo - 2024-06-17T172523.668.png",
    "09/Inserir um subtítulo - 2024-06-17T180302.462.png",
    "09/Inserir um subtítulo - 2024-06-17T180455.417.png",
  ],
  "11-12-13-14": [
    "11-12-13-14/Inserir um subtítulo (97).png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-16T154731.274.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-16T165858.452.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T164301.879.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T164437.530.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T164613.484.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T164802.953.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T165054.908.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T165136.068.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T165403.099.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T165523.226.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T165702.862.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T165815.005.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T171626.879.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T171907.906.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T172038.898.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T172204.009.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T172319.958.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T172423.884.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T172551.904.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T172721.650.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T172924.122.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T173032.938.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T173139.917.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T173627.860.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T174100.909.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T174315.826.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-19T174503.713.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T110411.623.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T110554.145.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T110853.014.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T111353.137.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T111725.016.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T111900.990.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T140721.390.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T140953.987.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T141107.756.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T141719.365.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T142018.743.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T142128.567.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T142251.737.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T142413.774.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T142842.747.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T143109.825.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T143238.820.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T143354.789.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T143504.737.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T143646.720.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-22T143809.777.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-24T161230.596.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-24T161543.587.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-24T161724.644.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-24T161858.595.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-24T162014.569.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-24T162146.585.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-24T162320.573.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-24T162545.654.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-24T162717.846.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-24T162835.883.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-25T153950.956.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-25T154135.487.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-25T154310.692.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-25T154429.922.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-25T154755.924.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-25T183504.933.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-25T183612.915.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-25T183716.911.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-25T183821.918.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-25T183935.072.png",
    "11-12-13-14/Inserir um subtítulo - 2024-04-26T144117.428.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-23T141909.083.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-23T152052.244.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-23T184431.878.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-23T195611.008.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-24T181503.934.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-24T181802.399.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-24T182651.830.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-27T160905.621.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-27T163237.300.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-27T180538.563.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-28T165757.247.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-28T170201.337.png",
    "11-12-13-14/Inserir um subtítulo - 2024-05-28T170505.158.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T164543.196.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T165200.617.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T165534.427.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T165702.586.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T170019.406.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T170158.427.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T170936.379.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T171237.447.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T172154.021.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T172358.426.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T172848.370.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T173112.494.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T173333.404.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T173537.770.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T175306.281.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T175537.947.png",
    "11-12-13-14/Inserir um subtítulo - 2024-06-17T175927.818.png",
    "11-12-13-14-2/Felype Dias Da Silva (1).png",
    "11-12-13-14-2/Felype Dias Da Silva (2).png",
    "11-12-13-14-2/Felype Dias Da Silva (3).png",
    "11-12-13-14-2/Felype Dias Da Silva (4).png",
    "11-12-13-14-2/Felype Dias Da Silva (5).png",
    "11-12-13-14-2/Felype Dias Da Silva (6).png",
    "11-12-13-14-2/Felype Dias Da Silva (7).png",
    "11-12-13-14-2/Felype Dias Da Silva (8).png",
    "11-12-13-14-2/Felype Dias Da Silva.png",
    "11-12-13-14-2/Inserir um subtítulo (100).png",
    "11-12-13-14-2/Inserir um subtítulo (16).png",
    "11-12-13-14-2/Inserir um subtítulo (17).png",
    "11-12-13-14-2/Inserir um subtítulo (18).png",
    "11-12-13-14-2/Inserir um subtítulo (19).png",
    "11-12-13-14-2/Inserir um subtítulo (22).png",
    "11-12-13-14-2/Inserir um subtítulo (23).png",
    "11-12-13-14-2/Inserir um subtítulo (24).png",
    "11-12-13-14-2/Inserir um subtítulo (25).png",
    "11-12-13-14-2/Inserir um subtítulo (26).png",
    "11-12-13-14-2/Inserir um subtítulo (27).png",
    "11-12-13-14-2/Inserir um subtítulo (28).png",
    "11-12-13-14-2/Inserir um subtítulo (30).png",
    "11-12-13-14-2/Inserir um subtítulo (32).png",
    "11-12-13-14-2/Inserir um subtítulo (33).png",
    "11-12-13-14-2/Inserir um subtítulo (57).png",
    "11-12-13-14-2/Inserir um subtítulo (67).png",
    "11-12-13-14-2/Inserir um subtítulo (68).png",
    "11-12-13-14-2/Inserir um subtítulo (70).png",
    "11-12-13-14-2/Inserir um subtítulo (71).png",
    "11-12-13-14-2/Inserir um subtítulo (72).png",
    "11-12-13-14-2/Inserir um subtítulo (73).png",
    "11-12-13-14-2/Inserir um subtítulo (74).png",
    "11-12-13-14-2/Inserir um subtítulo (75).png",
    "11-12-13-14-2/Inserir um subtítulo (76).png",
    "11-12-13-14-2/Inserir um subtítulo (77).png",
    "11-12-13-14-2/Inserir um subtítulo (78).png",
    "11-12-13-14-2/Inserir um subtítulo (79).png",
    "11-12-13-14-2/Inserir um subtítulo (80).png",
    "11-12-13-14-2/Inserir um subtítulo (81).png",
    "11-12-13-14-2/Inserir um subtítulo (82).png",
    "11-12-13-14-2/Inserir um subtítulo (84).png",
    "11-12-13-14-2/Inserir um subtítulo (85).png",
    "11-12-13-14-2/Inserir um subtítulo (86).png",
    "11-12-13-14-2/Inserir um subtítulo (87).png",
    "11-12-13-14-2/Inserir um subtítulo (88).png",
    "11-12-13-14-2/Inserir um subtítulo (90).png",
    "11-12-13-14-2/Inserir um subtítulo (91).png",
    "11-12-13-14-2/Inserir um subtítulo (92).png",
    "11-12-13-14-2/Inserir um subtítulo (93).png",
    "11-12-13-14-2/Inserir um subtítulo (94).png",
    "11-12-13-14-2/Inserir um subtítulo (95).png",
    "11-12-13-14-2/Inserir um subtítulo (96).png",
    "11-12-13-14-2/Inserir um subtítulo (98).png",
    "11-12-13-14-2/Inserir um subtítulo (99).png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-03T184604.009.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-03T184916.316 (1).png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-03T190019.320.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-03T190955.606.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-03T191203.424.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-03T191512.939.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-03T191757.444.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-03T191942.668.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T154109.457.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T161655.690.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T162012.995.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T162414.448.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T162852.747.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T164318.417.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T164446.179.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T164656.880.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T164828.541.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T165202.754.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T165341.636.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T165531.263.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T165654.480.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-16T170334.923.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T162014.998.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T162350.156.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T162559.524.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T162832.822.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T163031.810.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T163242.369.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T163420.918.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T163611.051.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T163745.820.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T163939.898.png",
    "11-12-13-14-2/Inserir um subtítulo - 2024-04-19T164100.747.png",
  ],
  "15": [
    "15/Inserir um subtítulo - 2024-04-16T163341.459.png",
    "15/Inserir um subtítulo - 2024-04-16T163551.514.png",
    "15/Inserir um subtítulo - 2024-04-16T163727.536.png",
    "15/Inserir um subtítulo - 2024-04-16T163843.241.png",
    "15/Inserir um subtítulo - 2024-04-16T164013.856.png",
    "15/Inserir um subtítulo - 2024-04-16T164131.393.png",
    "15/Inserir um subtítulo - 2024-04-16T165010.481.png",
    "15/Inserir um subtítulo - 2024-05-24T182201.459.png",
    "15/Inserir um subtítulo - 2024-05-24T182956.276.png",
  ],
  "17": [
    "17/Inserir um subtítulo (34).png",
    "17/Inserir um subtítulo (35).png",
    "17/Inserir um subtítulo (36).png",
    "17/Inserir um subtítulo - 2024-04-03T192452.837.png",
    "17/Inserir um subtítulo - 2024-04-19T170032.731.png",
    "17/Inserir um subtítulo - 2024-04-19T170218.003.png",
  ],
  feminine: [
    "feminine/Inserir um subtítulo (89).png",
    "feminine/Inserir um subtítulo - 2024-05-20T165135.726.png",
    "feminine/Inserir um subtítulo - 2024-05-23T183318.104.png",
    "feminine/Inserir um subtítulo - 2024-05-23T183646.170.png",
    "feminine/Inserir um subtítulo - 2024-05-23T184052.877.png",
    "feminine/Inserir um subtítulo - 2024-05-23T184213.283.png",
    "feminine/Inserir um subtítulo - 2024-05-24T140244.478.png",
    "feminine/Inserir um subtítulo - 2024-05-24T184813.416.png",
    "feminine/Inserir um subtítulo - 2024-05-25T102740.614.png",
    "feminine/Inserir um subtítulo - 2024-05-25T102945.263.png",
    "feminine/Inserir um subtítulo - 2024-05-27T180901.523.png",
    "feminine/Inserir um subtítulo - 2024-05-27T181335.140.png",
    "feminine/Inserir um subtítulo - 2024-05-27T184524.848.png",
    "feminine/Inserir um subtítulo - 2024-05-29T190523.306.png",
    "feminine/Inserir um subtítulo - 2024-05-29T190731.454.png",
    "feminine/Inserir um subtítulo - 2024-06-01T095927.092.png",
    "feminine/Inserir um subtítulo - 2024-07-09T085756.564.png",
  ],
};

const categories = ["07", "08", "09", "11-12-13-14", "15", "17", "feminine"];

const CarouselSoccer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("07");
  const touchStartX = useRef(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = useMemo(
    () => imagesByCategory[selectedCategory],
    [selectedCategory]
  );

  const changeSlide = useCallback(
    (direction: number) => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + direction + images.length) % images.length
      );
    },
    [images.length]
  );

  const handleTouchStart = ({ touches }: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = touches[0].clientX;
  };

  const handleTouchEnd = ({
    changedTouches,
  }: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) changeSlide(1);
    if (diff < -50) changeSlide(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden pb-20">
      <div className="relative h-64 w-full bg-black flex items-center justify-center">
        <h1 className="absolute text-5xl md:text-9xl text-white opacity-10 mb-10 better-tracking ff">
          ELENCO
        </h1>
        <div className="z-10 gap-4 md:gap-16">
          <div className="mb-12 flex flex-col md:flex-row items-center space-x-0 md:space-x-14">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex text-md font-semibold text-1992 hover:opacity-95 ff better-tracking uppercase"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedCategory === "feminine" ? "Masculino" : "Masculino"}
                  <svg
                    className="h-5 w-5 text-1992"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isOpen && (
                <div className="absolute w-full" role="menu">
                  <div className="grid grid-cols-4 py-8 md:py-0" role="none">
                    {categories
                      .filter((category) => category !== "feminine")
                      .map((category) => (
                        <a
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setCurrentIndex(0);
                            setIsOpen(false);
                          }}
                          className={`w-full py-1 text-md text-white hover:opacity-50 text-center ff better-tracking text-nowrap cursor-pointer ${
                            category === "11-12-13-14" ? "col-span-4" : ""
                          }`}
                        >
                          {category}
                        </a>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                setSelectedCategory("feminine"), setCurrentIndex(0);
                setIsOpen(false);
              }}
              className="text-md font-semibold text-1992 hover:opacity-95 ff better-tracking uppercase mt-2 md:mt-0"
            >
              Feminino
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative w-full max-w-lg mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="whitespace-nowrap transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => {
            const isActive = index === currentIndex;
            const isAdjacent =
              Math.abs(currentIndex - index) === 1 ||
              Math.abs(currentIndex - index) === images.length - 1;

            return (
              <div
                key={index}
                className={`inline-block w-full relative transition-transform duration-300 ${
                  isActive ? "scale-110" : "scale-90"
                } ${isAdjacent ? "mx-2" : ""}`}
              >
                <Image
                  src={`https://clube-1992.s3.us-east-1.amazonaws.com/${src}`}
                  alt={`Slide ${index}`}
                  width={600}
                  height={400}
                  className={`rounded-lg transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </div>
        <CarouselButton direction={-1} onClick={() => changeSlide(-1)} />
        <CarouselButton direction={1} onClick={() => changeSlide(1)} />
      </div>
    </div>
  );
};

const CarouselButton = ({
  direction,
  onClick,
}: {
  direction: number;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 transform -translate-y-1/2 text-1992 p-2 rounded-full"
    style={{
      left: direction === -1 ? "1rem" : undefined,
      right: direction === 1 ? "1rem" : undefined,
    }}
  >
    {direction === -1 ? "❮" : "❯"}
  </button>
);

export default CarouselSoccer;

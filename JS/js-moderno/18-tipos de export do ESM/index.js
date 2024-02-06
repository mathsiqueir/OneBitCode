import { inline } from "./inline.js"

//no defaultInline poderia ter colocado qualquer nome, mas só pode ter UM por arquivo
import defaultInline from "./inline.js"

import exportDefault, { group } from "./non-inline.js"

inline()
defaultInline()

group()
exportDefault()
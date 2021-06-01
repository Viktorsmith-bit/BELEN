import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
                <div className="px-1 px-md-5 px-lg-0">
                    <div className="container-xl">
                        <div className='row justify-content-center mt-3 mt-lg-5'>
                            <div className='col-12 col-md-6 col-lg-3 col-xl-4'>
                                <div className="mb-4 shadow-sm bg-white">
                                    <div class="border border-bottom-0 px-4 py-2" style={{backgroundColor:'#D5F5E3 '}}>
                                        <h5 class="lead my-auto fw-bold">Temas</h5>
                                    </div>
                                    <div className="p-4 border lh-1" >
                                        <a href='#implantes'><p>Implantología</p></a>
                                        <a href='#endodoncia'><p>Endodoncia</p></a>
                                        <a href='#estetica'><p>Estética Dental</p></a>
                                        <a href='#ortodoncia'><p>Ortodoncia</p></a>
                                        <a href='#odontopediatria'><p>Odontopediatría</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-8 col-xl-8' id='implantes'>
                                <div className='row justify-content-center'>
                                    <div className="blogger">
                                        <div className='blog w-100 bk-color p-5 border border-dark' >
                                            <h1 className='text-white fw-bolder'>IMPLATOLOGÍA</h1>
                                        </div>
                                        <div className="p-4 bg-white shadow-sm border" >
                                            <p className='text-muted'>La cirugía de implantes dentales es un procedimiento que reemplaza las raíces de los dientes con pernos metálicos que parecen tornillos y reemplaza el diente faltante, o dañado, con un diente artificial que tiene el mismo aspecto y que cumple la misma función que los dientes reales. La cirugía de implantes dentales puede ofrecer una alternativa bien aceptada a las dentaduras o a los puentes que no se fijan bien, y puede ofrecer una opción cuando una falta de raíces de los dientes naturales no permite la creación de dentaduras o reemplazos de dientes con puentes.</p>
                                            <p className='mt-4 fw-bold'>Por qué se realiza.</p>
                                            <p className='text-muted'>Los implantes dentales se colocan quirúrgicamente en la mandíbula, donde sirven como raíces de los dientes faltantes. Debido a que el titanio en los implantes se fusiona con la mandíbula, los implantes no se deslizarán, harán ruido ni causarán daño en el hueso de la forma en que los puentes o dentaduras postizas fijas podrían hacerlo. Lo materiales no pueden picarse como tus propios dientes mientras que los puentes regulares sí pueden.</p>
                                            <p className='mt-4 fw-bold'>Riesgos.</p>
                                            <p className='text-muted'>Al igual que cualquier cirugía, la cirugía de implante dental presenta algunos riesgos de salud. Sin embargo, es raro que surjan problemas y, si ocurren, son generalmente menores y se tratan con facilidad.</p>
                                            <div className='px-4'>
                                                <li className='text-muted'>Infección en el sitio del implante.</li>
                                                <li className='text-muted'>Lesión o daño en las estructuras de alrededor, como otros dientes o vasos sanguíneos.</li>
                                                <li className='text-muted'>Lesión a los nervios, que puede causar dolor, entumecimiento o cosquilleo en los dientes naturales, las encías, los labios o el mentón.</li>
                                                <li className='text-muted'>Problemas sinusales, cuando los implantes dentales colocados en la mandíbula superior sobresalen por una de las cavidades sinusales.</li>
                                            </div>
                                            <p className='mt-4 fw-bold'>Que esperar.</p>
                                            <p className='text-muted'>Por lo general, la cirugía de implante dental es una cirugía ambulatoria realizada en etapas, con tiempo de curación entre los procedimientos. El proceso de colocar un implante dental implica múltiples pasos, que incluyen:</p>
                                            <div className='px-4'>
                                                <li className='text-muted'>Extracción del diente dañado.</li>
                                                <li className='text-muted'>Preparación de la mandíbula (injerto), cuando es necesario.</li>
                                                <li className='text-muted'>Colocación del implante dental.</li>
                                                <li className='text-muted'>Crecimiento y curación del hueso.</li>
                                                <li className='text-muted'>Colocación del pilar.</li>
                                                <li className='text-muted' id='endodoncia'>Colocación del diente artificial.</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row justify-content-center mt-5'>
                                    <div class="blogger">
                                        <div className='blog w-100 bk-color p-5 border border-dark' >
                                            <h1 className='text-white fw-bolder'>ENDODONCIA</h1>
                                        </div>
                                        <div className="p-4 bg-white shadow-sm border" >
                                            <p className='text-muted'>Se llama endodoncia, de endo (interior) y odontos (diente), a un tipo de tratamiento que se realiza en odontología. Consiste en la extirpación de la pulpa dental y el posterior relleno y sellado de la cavidad pulpar con un material inerte. Es una especialidad odontológica reconocida desde 1963 por la Asociación Dental Americana mientras que los odontólogos especializados en esta técnica reciben el nombre de endodoncistas.</p>
                                            <p className='mt-4 fw-bold'>Descripción e indicaciones</p>
                                            <p className='text-muted'>La terapia endodóntica consiste en la extirpación total de la pulpa dental. Se aplica en piezas dentales fracturadas, con caries profundas que presentan lesiones en su tejido pulpar que se conocen como pulpitis. Esta es irreversible y la única opción terapéutica es la extirpación total de la pulpa dental, y la obturación tridimensional del conducto dentario. La pulpitis está frecuentemente provocada por caries dentales profundas que alcanzan la pulpa dental y producen infección en la misma, originando dolor continuo y permanente que aumenta con estímulos fríos, calientes, alimentos dulces o ácidos.</p>
                                            <p className='mt-4 fw-bold'>Técnica</p>
                                            <p className='text-muted'>Limpiar el sistema de conductos radiculares: bacterias, agujas cálcicas pulpares, tejido necrótico, etc. con el fin de dejar el conducto lo más aséptico posible. Nunca se conseguirá que sea totalmente estéril solamente se trata el conducto principal de cada raíz y no los numerosos conductos accesorios inaccesibles a la instrumentación biomecánica pero accesibles a las sustancias irrigadoras del conducto radicular en forma medicamentosa.</p>
                                            <p className='text-muted'>La obturación del conducto radicular tridimensional con forma y tamaño adecuados: se da forma cónica de la corona dental al ápice del diente. Se crea un tope oclusal para que se quede justo a la longitud de trabajo, esto es que el relleno esté ajustado a la longitud de la raíz y por último, habrá que respetar la morfología original del conducto.</p>
                                            <p className='text-muted'>Conseguir el sellado del tercio apical y del resto del conducto. Los cementoblastos van a producir cemento que cierra el ápice, consiguiendo el éxito histológico de la terapéutica del conducto radicular.</p>
                                            <p className='mt-4 fw-bold'>Fases</p>
                                            <div className='px-4'>
                                                <li className='text-muted'>Diagnóstico.</li>
                                                <li className='text-muted'>Anestesia.</li>
                                                <li className='text-muted'>Aislamiento</li>
                                                <li className='text-muted'>Conductometría</li>
                                                <li className='text-muted'>Instrumentación.</li>
                                                <li className='text-muted'>Obturación. </li>
                                                <li className='text-muted'>Control.</li>
                                            </div>
                                            <p className='mt-4 fw-bold'>Diagnóstico</p>
                                            <p className='fw-bold'>01. Anamnesis</p>
                                            <p className='text-muted'>Como en todo procedimiento médico el proceso comienza con una historia clínica general y específica dental en la que hay que tener en cuenta ciertos aspectos como los antecedentes personales, enfermedades cardiacas o pulmonares, utilización de fármacos anticoagulantes, etc. Se realiza una evaluación subjetiva del dolor. El profesional puede preguntar por el tipo y localización del dolor, la intensidad del mismo, si el dolor es suave, la lesión pulpar será, probablemente, una lesión reversible, por el contrario, un dolor intenso indica que la lesión pulpar será irreversible. Por lo general habrá una lesión pulpar reversible cuando el dolor sea provocado, dure menos de un minuto y duela al frío, y será una lesión pulpar irreversible, y por lo tanto indicación de endodoncia o extracción, si duele espontáneamente, durante más de 1 minuto y aumenta de intensidad al aplicar calor. Si la aplicación de frío sobre la pieza —por ejemplo mediante enjuagues con agua fría— produce alivio del dolor, puede existir una lesión irreversible de la pulpa denominada pulpitis purulenta.</p>
                                            <p className='fw-bold'>02. Inspección</p>
                                            <p className='text-muted'>Se hará una inspección fuera de la boca en busca de fístulas extraorales que delatan la muerte pulpar del diente que fistuliza, y una palpación en busca de un flemón u otras alteraciones. Posteriormente se visualiza el interior de la cavidad oral para encontrar anomalías, como endodoncias anteriores o fístulas intraorales.</p>
                                            <p className='fw-bold'>03. Pruebas clínicas</p>
                                            <div className='px-4'>
                                                <li className='text-muted'>Pruebas de sensibilidad.</li>
                                                <li className='text-muted'>Exploración periodontal.</li>
                                            </div>
                                            <p className='fw-bold mt-4'>04. Radiología</p>
                                            <p className='text-muted' id='estetica'>Se realizan radiografías periapicales, las pulpas vitales y patológicas no son visibles en la radiografía. Las pulpas necróticas pueden producir o no cambios radiográficos en estadios iniciales, para ser claramente visible el proceso inflamatorio debe extenderse hasta la cortical ósea. Las lesiones perirradiculares se caracterizan por pérdida apical de la lámina dura donde hay un ensanchamiento por necrosis, presencia de radiolucidez apical.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row justify-content-center mt-5'>
                                    <div class="blogger">
                                        <div className='blog w-100 bk-color p-5 border border-dark' >
                                            <h1 className='text-white fw-bolder'>ESTÉTICA DENTAL</h1>
                                        </div>
                                        <div className="p-4 bg-white shadow-sm border" >
                                            <p className='text-muted'>El término estética desde el punto de vista etimológico, aesthesis, (estético) deriva del griego y significa percepción. Se podría definir la odontología estética como una aplicación del arte y la ciencia destinada a desarrollar o destacar la belleza en forma de sonrisa.</p>
                                            <p className='mt-4 fw-bold'>Descripción</p>
                                            <p className='text-muted'>La evolución histórica de la odontología estética ha seguido una trayectoria similar a la de la cirugía plástica, que en sus comienzos fue considerada como una especialidad de la medicina esnobista y frívola. En la actualidad existen estudios en los que se observa como los defectos físicos pueden llegar a constituir una enfermedad demostrada psíquica y clínicamente en el individuo, lo que hoy en día, ha derivado en que la odontología estética, cuente con el apoyo de la mayoría de los profesionales de la odontología, a lo que se suma que, gracias a los nuevos materiales y técnicas se consiguen resultados funcionales adecuados, lo que ha ido configurando una parcela necesaria en la odontología moderna.</p>
                                            <p className='mt-4 fw-bold'>Percepción visual de la sonrisa</p>
                                            <p className='text-muted'>Desde el punto de vista de la percepción visual, la sonrisa se debe considerar como una unidad donde el todo es más que la suma de las partes. Los principios de la percepción visual descritos por Lombardi se organizan en varias categorías: Composición- Es la relación que existe entre los dientes, su color, textura y posición. La dentición natural estética debe estar ordenada en repeticiones de forma, posición y color, percibiendo tanto el lado derecho como el izquierdo como una unidad. Otro elemento que se debe tener en cuenta en la composición dental es la dominancia: una forma, un color o una inclinación de un diente puede dominar el aspecto global de la sonrisa. Proporción- La figura humana entera se puede describir en términos de tamaños proporcionales a las distintas partes. Cuando se observa una dentición natural de frente, a pesar de que cada diente individual tiene una forma y un tamaño diferentes, los dientes están relacionados entre sí y, a su vez, con la cara en cierta proporción.</p>
                                            <p className='mt-4 fw-bold'>Equilibrio</p>
                                            <p className='text-muted'>Estabilidad que resulta al igualar fuerzas que se oponen. Las composiciones equilibradas abarcan fuerzas visuales iguales a ambos lados de un eje central, dando la sensación de estabilidad y permanencia. Por el contrario, las composiciones desequilibradas dan una sensación de desconcierto. Armonía- El paralelismo en las líneas que siguen una misma dirección produce una armonía en la composición. Los tratamientos más importantes realizados odontológicamente presentan cambios visibles en muy poco tiempo.</p>
                                            <p className='mt-4 fw-bold'>La alteración de la sonrisa</p>
                                            <p className='text-muted'>La alteración de uno de los componentes del conjunto produce una ruptura en la composición. La alteración de la composición estética de la sonrisa provoca la necesidad de tratamientos que devuelvan a los pacientes su estética deseada. Estas alteraciones pueden clasificarse en dos: 1. Las que afectan los aspectos faciales de la sonrisa: alteraciones de tejidos blandos faciales por traumatismos, quemaduras, alteraciones congénitas, tumoraciones, etc., que son tratadas con cirugía plástica o cirugía máxilofacial. 2. Las que afectan los aspectos bucodentales, que comprenden alteraciones dentales y alteraciones periodontales.</p>
                                            <p className='mt-4 fw-bold'>Posibilidades terapéuticas en odontología estética</p>
                                            <p className='text-muted'>Actualmente, gracias a los avances tecnológicos de los últimos años, se dispone de técnicas y materiales que permiten realizar tratamientos con fines estéticos que devuelven al paciente una función y una estética adecuadas. Básicamente, los tratamientos disponibles con fines estéticos pueden clasificarse en los siguientes: 1. Tratamientos de higiene y profilaxis. 2. Tratamientos con técnicas de microabrasión del esmalte. 3. Contorneado estético. 4. Tratamientos con técnicas de blanqueamiento. 5. Tratamientos restauradores. a) Con resinas compuestas. b) Con porcelana dental. 6. Tratamientos ortodóncicos u ortognáticos. 7. Tratamientos periodontales.</p>
                                            <p className='mt-4 fw-bold'>¿Cuales son los tratamientos para estas patologías?</p>
                                            <div className='px-4'>
                                                <li className='text-muted'>Blanqueamiento dental: que es una de las técnicas más frecuentes dada su accesibilidad económica y su facilidad de aplicación por parte del dentista.</li>
                                                <li className='text-muted'>Cierre de diastema y corrección de asimetrías dentarias: otra de las técnicas más frecuentemente utilizadas por los especialistas, no obstante suele requerir más trabajo y empeño que el blanqueamiento dental. Su proceso es mucho más costoso también. Es recomendable no hacer este tipo de trabajos en pequeños o jóvenes que aún se encuentran desarrollando su dentadura.</li>
                                                <li className='text-muted'>Restauración de caries de cuello.</li>
                                                <li className='text-muted'>Utilización de carillas estéticas.</li>
                                                <li className='text-muted'>Instrumentación.</li>
                                                <li className='text-muted'>Recambio de amalgamas por restauraciones con luz halógena (con resinas compuestas que luego de su utilización quedan del mismo color del diente). </li>
                                                <li className='text-muted' id='ortodoncia'>Reconstrucción de fracturas.</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                                <div className='row justify-content-center mt-5'>
                                    <div className="blogger">
                                        <div className='blog w-100 bk-color p-5 border border-dark' >
                                            <h1 className='text-white fw-bolder'>ORTODONCIA</h1>
                                        </div>
                                        <div className="p-4 bg-white shadow-sm border">
                                            <p className='text-muted'>La Sociedad Española de Ortodoncia y Ortopedia Dentofacial (SEDO) explica que la ortodoncia persigue la normalidad en el paciente, pero no alcanzar lo ideal, es decir, la perfección. Esto significa que un tratamiento ortodóncico pretende hacer que los pacientes obtengan lo que se considera un crecimiento y desarrollo de sus dientes y maxilares dentro de su propia normalidad, con un ensamblaje “armónico” de todas las piezas.</p>
                                            <p className='mt-4 fw-bold'>¿Quién necesita una ortodoncia?</p>
                                            <p className='text-muted'>A rasgos generales, necesitan una ortodoncia todos aquellos que presenten maloclusión de los dientes, puesto que esta anomalía puede impedir una masticación adecuada, la correcta limpieza de los dientes -con consecuencias negativas para la salud dental, como caries, pérdida de dientes, problemas de encías o desgaste del esmalte- o, incluso, generar inseguridad o hacer que los aquejados se sientan cohibidos.</p>
                                            <p ><span className='text-muted'>La</span> <span className='fw-bold'>desalineación de la mordida</span> <span className='text-muted'>se clasifica en:</span></p>
                                            <div className='px-4'>
                                                <li ><span className='fw-bold'>Tipo I:</span> <span className='text-muted'>aunque los maxilares están correctamente relacionados, las piezas dentarias están adelantadas con respecto al hueso del que nacen. Puede existir apiñamiento de los dientes o no.</span></li>
                                                <li ><span className='fw-bold'>Tipo II:</span> <span className='text-muted'>el maxilar superior está desplazado hacia delante, con los dientes muy adelantados con respecto a su base ósea.</span></li>
                                                <li ><span className='fw-bold'>Tipo III:</span> <span className='text-muted'>la mandíbula ha superado en crecimiento al maxilar de arriba y provoca una mordida cruzada.</span></li>
                                            </div>
                                            <p className='mt-4 fw-bold'>Problemas y enfermedades que se tratan con ortodoncia</p>
                                            <div className='px-4'>
                                                <li ><span className='fw-bold'>Malposición dentaria:</span> <span className='text-muted'>se recurre a la ortodoncia cuando la corona de un diente está gravemente desplazada de su posición correcta.</span></li>
                                                <li ><span className='fw-bold'>Incisivos con mal ángulo:</span> <span className='text-muted'>la ortodoncia con dispositivos fijos corrigen el ángulo de los incisivos superiores, inferiores y ambos, en bloque.</span></li>
                                                <li ><span className='fw-bold'>Pérdida prematura de dientes de leche:</span> <span className='text-muted'>como hemos comentado anteriormente, cuando se pierde un molar es posible que se necesite colocar un ‘mantenedor de espacio’ para que el nuevo diente tenga su sitio reservado.</span></li>
                                                <li ><span className='fw-bold'>Mordida abierta:</span> <span className='text-muted'>cuando los dientes superiores e inferiores no se solapan y queda un hueco entre ellos al morder, se puede usar un expansor en niños como medida preventiva; aparatos y brackets en los adolescentes, pero se suele recurrir a la cirugía en el caso de los adultos.</span></li>
                                                <li ><span className='fw-bold'>Dientes rotados: </span> <span className='text-muted'>la ortodoncia consigue hacer movimientos de rotación para ubicar de manera precisa el diente.</span></li>
                                                <li ><span className='fw-bold' id='odontopediatria'>Problemas con el habla:</span> <span className='text-muted'>los dispositivos de ortodoncia pueden solucionar problemas con el habla -es decir, dificultad para pronunciar ciertos fonemas correctamente- ocasionados por proyección de la mandíbula, mordida abierta, protrusión de los incisivos superiores, sobremordida horizontal, ausencia de molares superiores permanentes o deglución atípica.</span></li>                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row justify-content-center mt-5'>
                                    <div class="blogger">
                                        <div className='blog w-100 bk-color p-5 border border-dark' >
                                            <h1 className='text-white fw-bolder'>ODONTOPEDIATRÍA</h1>
                                        </div>
                                        <div className="p-4 bg-white shadow-sm border" >
                                            <p className='text-muted'>La odontopediatría es la rama de la odontología encargada de tratar a los niños. El odontopediatra será, por tanto, el encargado de explorar y tratar a niños y recién nacidos. También se encarga de detectar posibles anomalías en la posición de los maxilares o dientes para remitir al ortodoncista, especialista en ortodoncia, y de hacer un tratamiento restaurador en caso de necesitarlo. El tratamiento restaurador principalmente se compone de tratar los traumatismos, usar selladores que tienen la función de obturar levemente los surcos y fisuras de las piezas dentales sin apenas quitar material dental para evitar posibles caries, y en tratar las caries producidas y sus consecuencias.</p>
                                            <p className='mt-4 fw-bold'>Diferencias</p>
                                            <p className='text-muted'>La principal diferencia entre la odontología habitual y la odontopediatría en el tratamiento de caries es la presencia de los dientes temporales o de leche en los niños lo cual hace que el tratamiento cambie, de forma que las lesiones ocurridas en la dentición temporal se tratarán de una manera menos conservadora y más agresiva que las ocurridas en los dientes permanentes, para evitar que, en el peor de los casos, se pudiera dar un tratamiento insuficiente a un diente temporal que luego repercutiría en su sucesor.</p>
                                            <p className='mt-4 fw-bold'>Necesidades especiales y prevención de enfermedades sistémicas</p>
                                            <p className='text-muted'>Los niños y adolescentes que padecen determinadas alteraciones de la salud, tales como enfermedades sistémicas, trastornos del desarrollo (tales como síndrome de Down o trastorno del espectro autista) o problemas mentales, presentan mayor riesgo de desarrollar enfermedades orales. El papel del odontopediatra en su prevención y manejo es fundamental, por lo que es necesario que conozca la condición del niño o adolescente y cómo puede esta influir en su salud bucal. A partir de los 12 meses de edad, estos niños deben iniciar un seguimiento periódico, especializado y personalizado por parte del dentista pediátrico. No obstante, en la práctica no se suele realizar un adecuado control de la salud buco-dental en estos pacientes.</p>
                                            <p className='mt-4 fw-bold'>Enfermedades incluidas en la odontopediatría</p>
                                            <div className='px-4'>
                                                <li className='text-muted'>Alteración en el número, tamaño y forma de los dientes de origen congénito.</li>
                                                <li className='text-muted'>Anomalías de la estructura y color de la dentición.</li>
                                                <li className='text-muted'>Caries</li>
                                                <li className='text-muted'>Traumatismos dentales</li>
                                                <li className='text-muted'>Maloclusiones.</li>
                                            </div>
                                            <p className='mt-4 fw-bold'>Tratamientos utilizados en odontopediatría</p>
                                            <p className='fw-bold'>01. Anestesia</p>
                                            <p className='text-muted'>La anestesia generalmente va unida a un vasoconstrictor para aumentar su efecto y disminuir la hemorragia. Las alergias pueden ser al anestésico, al vasoconstrictor o a los componentes adicionales como son: conservantes, antioxidantes y las sales orgánicas. Generalmente se comienza con anestesia tópica, es importante en niños porque disminuye el dolor a la inyección posterior. A continuación se emplea anestesia inyectada, tenemos dos tipos: Infiltrativas, es decir alrededor del diente y tronculares en la que se anestesia toda la hemiarcada.</p>
                                            <p className='fw-bold'>02. Traumatismos</p>
                                            <p className='text-muted'>El tratamiento depende del tipo de daño, en dentición permanente, si tenemos un diente fracturado con exposición pulpar menosr de 2 mm y de menos de 12 horas de evolución, se hará un recubrimiento directo con hidróxido de calcio, si la lesión de más de 2 mm y de más de 12 horas, se realizara endodoncia o pulpotomia y a continuación reconstrucción. En los casos en los que por el traumatismo se produzca una avulsión, desprendimiento total del diente fuera de la cavidad, está indicado el reimplante si han pasado menos de 120 minutos, si ha pasado más tiempo el porcentaje de fracaso es del 100%. El transporte de la pieza deberá ser en la propia boca del paciente, o de algún familiar, en leche o en suero. Está totalmente contraindicado frotar o cepillar el diente en cualquier momento ya que se perdería la posibilidad del reimplante.</p>
                                            <p className='fw-bold'>03. Tratamientos pulpares</p>
                                            <div className='px-4'>
                                                <li className='text-muted'>Recubrimiento indirecto. Antes de poner en práctica este procedimiento se debe estar seguro de que el diente en cuestión no presenta dolor espontáneo ni nocturno, que los antecedentes de dolor no sobrepasan las dos semanas de evolución, que es un dolor provocado que cesa al retirar el estímulo doloroso, que en los tejidos blandos alrededor del diente no se encuentra la encía inflamada o edematizada, ni presenta una fistúla activa o si cicatriz cerca de la raíz del diente, radiograficamente no debe presentar reabsorción ósea y la raíz debe tener al menos 2/3 de su longitud total, no presentar reabsorción interna ni cambio de color (obscuro, rosado o amarillo) que indiquen alguna patología pulpar preexistente, también se deberá confirmar la ausencia de cálculos pulpares.</li>
                                                <li className='text-muted'>Recubrimiento directo. El recubrimiento directo suele no usarse en dientes temporales por el riesgo que entraña su fracaso. La pulpa de los dientes temporales ya no tiene la capacidad de reparar la comunicación pulpar debido a que el tejido pulpar, histológicamente, está cerca de la degeneración fibrosa, propia de los dientes próximos a exfoliación. Sin embargo si la pieza involucrada es joven y se mantiene aislada adecuadamente en el momento de la comunicación, existen reportes de éxito con algunos materiales como el MTA y Emdogain, pero se recomienda ser cauteloso.</li>
                                                <li className='text-muted'>Pulpotomía. Se realiza en dientes temporales, y consiste en eliminar parte de la pulpa del diente. Para realizarla se elimina una parte de la pulpa dental y se coloca un material que servirá para favorecer la cicatrización y así conservar la vitalidad pulpar radicular. Está indicada en exposición pulpar cariosa a traumatismo en un diente asintomático y en caries que clínica y radiológicamente se acerca a la pulpa.</li>
                                                <li className='text-muted'>Pulpectomía. Es la eliminación total de la pulpa de la cámara coronaria así como la pulpa radicular para luego rellenar los conductos con óxido de zinc eugenol. Es importante que el relleno, en este caso el óxido de zinc eugenol, sea reabsorbible para que no haya problemas cuando el diente permenante empiece la erupción. Está indicada en aquellos casos que se quiera conservar el diente por razones de mantenimiento de espacio en las que no sea factible poner un mantenedor de espacio y tengamos la pulpa radicular afectada.</li>
                                                <li className='text-muted'>Apicoformación. Tras realizar el procedimiento, cuando se observe radiográficamente un cierre apical o cierre del ápice se hará una endodoncia.</li>
                                            </div>
                                        </div>
                                        <a href='#inicio'><button className="btn mt-4 px-4 fw-bold" style={{backgroundColor:'#82E0AA'}}>Subir</button></a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

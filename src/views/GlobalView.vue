<template>
  <h2 class="letraTitulo">Visió global del material</h2>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <router-link
        :to="{ name: 'VistaListaEspecifica', params: { title: inventario[0].title } }"
        title="Selecció del material"
      >
        <article class="tile is-child box">
          <p class="title"><img :src="inventario[0].image" width="100" /></p>
          <p class="subtitle">
            <strong class="subtitle2">{{ inventario[0].title }}</strong>
          </p>
          <div class="content">
            <br/>
              <table>
                <tr> 
                  <td><strong>Total Unitats </strong></td>
                  <td class="letraTotal">{{ this.contadores[0].TotalUnitats }}</td>
                </tr>
              </table> 
              <table>
                <tr>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material Disponible">
                      <img src="../assets/ico/Disponible.png" width="30" class="left" />
              
                    </router-link></td>
                  <td> 
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material No Disponible">
                      <img src="../assets/ico/NoDisponible.png" width="30" class="left" />
                    </router-link>
                  </td>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material En Manteniment">
                      <img src="../assets/ico/Mantenimiento.png" width="30" class="left" />
                    </router-link></td>
                </tr>
                <tr>
                  <td>{{ this.contadores[0].Disponible }}</td>
                  <td>{{ this.contadores[0].NoDisponible }}</td>
                  <td>{{ this.contadores[0].EnManteniment }}</td>
                </tr>
      
              </table>            
              <div id="graficos">
            <!-- <figure class="horizontal">100%</figure> -->
            <figure class="horizontal">75%</figure>
            <!-- <figure class="horizontal">30%</figure> -->
            <!-- <figure class="arco">50%</figure>
            <figure class="arco">75%</figure> -->
          </div>
            <!-- <p>
              <strong>Total Unitats: </strong
              ><span class="letra">{{ this.contadores[0].TotalUnitats }}</span
              ><br />
              <img src="../assets/ico/Disponible.png" width="20" class="left" />
              <strong> Disponibles: </strong
              ><span class="letra">{{ this.contadores[0].Disponible }}</span> <br />
              <img src="../assets/ico/NoDisponible.png" width="20" class="left" />
              <strong> No disponibles: </strong
              ><span class="letra"> {{ this.contadores[0].NoDisponible }}</span
              ><br />
              <img src="../assets/ico/Mantenimiento.png" width="20" class="left" />
              <strong> En Manteniment: </strong
              ><span class="letra">{{ this.contadores[0].EnManteniment }}</span>
            </p> -->
            </div>
          
        </article>
      </router-link>
    </div>

    <div class="tile is-parent">
      <router-link
        :to="{ name: 'VistaListaEspecifica', params: { title: inventario[7].title } }"
        title="Selecció del material"
      >
        <article class="tile is-child box">
          <p class="title"><img :src="inventario[7].image" width="100" /></p>
          <p class="subtitle">
            <strong class="subtitle2">{{ inventario[7].title }}</strong>
          </p>
          <div class="content">
           
              <table>
                <tr> 
                  <td><strong>Total Unitats </strong></td>
                  <td class="letraTotal">{{ this.contadores[1].TotalUnitats }}</td>
                </tr>
              </table> 
              <table>
                <tr>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material Disponible">
                      <img src="../assets/ico/Disponible.png" width="30" class="left" />
              
                    </router-link></td>
                  <td> 
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material No Disponible">
                      <img src="../assets/ico/NoDisponible.png" width="30" class="left" />
                    </router-link>
                  </td>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material En Manteniment">
                      <img src="../assets/ico/Mantenimiento.png" width="30" class="left" />
                    </router-link></td>
                </tr>
                <tr>
                  <td>{{ this.contadores[1].Disponible }}</td>
                  <td>{{ this.contadores[1].NoDisponible }}</td>
                  <td>{{ this.contadores[1].EnManteniment }}</td>
                </tr>
              </table>            
        
            <!-- <p>
              <strong>Total Unitats: </strong
              ><span class="letra">{{ this.contadores[1].TotalUnitats }}</span
              ><br />
              <img src="../assets/ico/Disponible.png" width="20" class="left" />
              <strong> Disponibles: </strong
              ><span class="letra">{{ this.contadores[1].Disponible }}</span
              ><br />
              <img src="../assets/ico/NoDisponible.png" width="20" class="left" />
              <strong> No disponibles: </strong
              ><span class="letra">{{ this.contadores[1].NoDisponible }} </span> <br />
              <img src="../assets/ico/Mantenimiento.png" width="20" class="left" />
              <strong> En Manteniment: </strong
              ><span class="letra">{{ this.contadores[1].EnManteniment }}</span>
            </p> -->
            <div id="graficos">
            <!-- <figure class="horizontal">100%</figure> -->
            <figure class="horizontal">75%</figure>
            </div>
          </div>
        </article>
      </router-link>
    </div>

    <div class="tile is-parent">
      <router-link
        :to="{ name: 'VistaListaEspecifica', params: { title: inventario[16].title } }"
        title="Selecció del material"
      >
        <article class="tile is-child box">
          <p class="title"><img :src="inventario[16].image" width="100" /></p>
          <p class="subtitle">
            <strong class="subtitle2">{{ inventario[16].title }}</strong>
          </p>
          <div class="content">
            <p>
              <table>
                <tr> 
                  <td><strong>Total Unitats </strong></td>
                  <td class="letraTotal">{{ this.contadores[2].TotalUnitats }}</td>
                </tr>
              </table> 
              <table>
                <tr>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material Disponible">
                      <img src="../assets/ico/Disponible.png" width="30" class="left" />
              
                    </router-link></td>
                  <td> 
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material No Disponible">
                      <img src="../assets/ico/NoDisponible.png" width="30" class="left" />
                    </router-link>
                  </td>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material En Manteniment">
                      <img src="../assets/ico/Mantenimiento.png" width="30" class="left" />
                    </router-link></td>
                </tr>
                <tr>
                  <td>{{ this.contadores[2].Disponible }}</td>
                  <td>{{ this.contadores[2].NoDisponible }}</td>
                  <td>{{ this.contadores[2].EnManteniment }}</td>
                </tr>
              </table>         
            </p>
            
            <!-- <p>
              <strong>Total Unitats: </strong
              ><span class="letra">{{ this.contadores[2].TotalUnitats }}</span
              ><br />
              <img src="../assets/ico/Disponible.png" width="20" class="left" />
              <strong> Disponibles: </strong
              ><span class="letra">{{ this.contadores[2].Disponible }}</span
              ><br />
              <img src="../assets/ico/NoDisponible.png" width="20" class="left" />
              <strong> No disponibles: </strong>
              <span class="letra">{{ this.contadores[2].NoDisponible }} </span> <br />
              <img src="../assets/ico/Mantenimiento.png" width="20" class="left" />
              <strong> En Manteniment: </strong>
              <span class="letra">{{ this.contadores[2].EnManteniment }}</span>
            </p> -->
            <div id="graficos">
            <!-- <figure class="horizontal">100%</figure> -->
            <figure class="horizontal">75%</figure>
            </div>
          </div>
        </article>
      </router-link>
    </div>
    <div class="tile is-parent">
      <router-link
        :to="{ name: 'VistaListaEspecifica', params: { title: inventario[60].title } }"
        title="Selecció del material"
      >
        <article class="tile is-child box">
          <p class="title"><img :src="inventario[60].image" width="100" /></p>
          <p class="subtitle">
            <strong class="subtitle2">{{ inventario[60].title }}</strong>
          </p>
          <div class="content">
            <p>
              <table>
                <tr> 
                  <td><strong>Total Unitats </strong></td>
                  <td class="letraTotal">{{ this.contadores[3].TotalUnitats }}</td>
                </tr>
              </table> 
              <table>
                <tr>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material Disponible">
                      <img src="../assets/ico/Disponible.png" width="30" class="left" />
              
                    </router-link></td>
                  <td> 
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material No Disponible">
                      <img src="../assets/ico/NoDisponible.png" width="30" class="left" />
                    </router-link>
                  </td>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material En Manteniment">
                      <img src="../assets/ico/Mantenimiento.png" width="30" class="left" />
                    </router-link></td>
                </tr>
                <tr>
                  <td>{{ this.contadores[3].Disponible }}</td>
                  <td>{{ this.contadores[3].NoDisponible }}</td>
                  <td>{{ this.contadores[3].EnManteniment }}</td>
                </tr>
              </table>          
            </p>
            <div id="graficos">
            <!-- <figure class="horizontal">100%</figure> -->
            <figure class="horizontal">75%</figure>
            </div>
            <!-- <p>
              <strong>Total Unitats: </strong>
              <span class="letra">{{ this.contadores[3].TotalUnitats }}</span
              ><br />
              <img src="../assets/ico/Disponible.png" width="20" class="left" />
              <strong> Disponibles:</strong
              ><span class="letra">{{ this.contadores[3].Disponible }}</span
              ><br />
              <img src="../assets/ico/NoDisponible.png" width="20" class="left" />
              <strong> No disponibles: </strong>
              <span class="letra">{{ this.contadores[3].NoDisponible }} </span> <br />
              <img src="../assets/ico/Mantenimiento.png" width="20" class="left" />
              <strong> En Manteniment:</strong>
              <span class="letra">{{ this.contadores[3].EnManteniment }}</span>
            </p> -->
          </div>
        </article>
      </router-link>
    </div>
    <div class="tile is-parent">
      <router-link
        :to="{ name: 'VistaListaEspecifica', params: { title: inventario[65].title } }"
        title="Selecció del material"
      >
        <article class="tile is-child box">
          <p class="title"><img :src="inventario[65].image" width="100" /></p>
          <p class="subtitle">
            <strong class="subtitle2">{{ inventario[65].title }}</strong>
          </p>
          <div class="content">
            <p>
              <table>
                <tr> 
                  <td><strong>Total Unitats </strong></td>
                  <td class="letraTotal">{{ this.contadores[4].TotalUnitats }}</td>
                </tr>
              </table> 
              <table>
                <tr>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material Disponible">
                      <img src="../assets/ico/Disponible.png" width="30" class="left" />
              
                    </router-link></td>
                  <td> 
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material No Disponible">
                      <img src="../assets/ico/NoDisponible.png" width="30" class="left" />
                    </router-link>
                  </td>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material En Manteniment">
                      <img src="../assets/ico/Mantenimiento.png" width="30" class="left" />
                    </router-link></td>
                </tr>
                <tr>
                  <td>{{ this.contadores[4].Disponible }}</td>
                  <td>{{ this.contadores[4].NoDisponible }}</td>
                  <td>{{ this.contadores[4].EnManteniment }}</td>
                </tr>
              </table>            
            </p>
            <div id="graficos">
            <!-- <figure class="horizontal">100%</figure> -->
            <figure class="horizontal">100%</figure>
            </div>
            <!-- <p>
              <strong>Total Unitats: </strong>
              <span class="letra">{{ this.contadores[4].TotalUnitats }}</span
              ><br />
              <img src="../assets/ico/Disponible.png" width="20" class="left" />
              <strong> Disponibles: </strong>
              <span class="letra"> {{ this.contadores[4].Disponible }}</span> <br />
              <img src="../assets/ico/NoDisponible.png" width="20" class="left" />
              <strong> No disponibles:</strong>
              <span class="letra">{{ this.contadores[4].NoDisponible }} </span> <br />
              <img src="../assets/ico/Mantenimiento.png" width="20" class="left" />
              <strong> En Manteniment: </strong>
              <span class="letra">{{ this.contadores[4].EnManteniment }}</span>
            </p> -->
          </div>
        </article>
      </router-link>
    </div>
  </div>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <router-link
        :to="{ name: 'VistaListaEspecifica', params: { title: inventario[66].title } }"
        title="Selecció del material"
      >
        <article class="tile is-child box">
          <p class="title"><img :src="inventario[66].image" width="100" /></p>
          <p class="subtitle">
            <strong class="subtitle2">{{ inventario[66].title }}</strong>
          </p>
          <div class="content">
            <p>
              <table>
                <tr> 
                  <td><strong>Total Unitats </strong></td>
                  <td class="letraTotal">{{ this.contadores[5].TotalUnitats }}</td>
                </tr>
              </table> 
              <table>
                <tr>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material Disponible">
                      <img src="../assets/ico/Disponible.png" width="30" class="left" />
              
                    </router-link></td>
                  <td> 
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material No Disponible">
                      <img src="../assets/ico/NoDisponible.png" width="30" class="left" />
                    </router-link>
                  </td>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material En Manteniment">
                      <img src="../assets/ico/Mantenimiento.png" width="30" class="left" />
                    </router-link></td>
                </tr>
                <tr>
                  <td>{{ this.contadores[5].Disponible }}</td>
                  <td>{{ this.contadores[5].NoDisponible }}</td>
                  <td>{{ this.contadores[5].EnManteniment }}</td>
                </tr>
              </table>            
            </p>
            <div id="graficos">
            <!-- <figure class="horizontal">100%</figure> -->
            <figure class="horizontal">100%</figure>
            </div>
            <!-- <p>
              <strong>Total Unitats: </strong
              ><span class="letra">{{ this.contadores[5].TotalUnitats }}</span> <br />
              <img src="../assets/ico/Disponible.png" width="20" class="left" />
              <strong> Disponibles: </strong>
              <span class="letra">{{ this.contadores[5].Disponible }}</span> <br />
              <img src="../assets/ico/NoDisponible.png" width="20" class="left" />
              <strong> No disponibles: </strong>
              <span class="letra">{{ this.contadores[5].NoDisponible }} </span> <br />
              <img src="../assets/ico/Mantenimiento.png" width="20" class="left" />
              <strong> En Manteniment: </strong>
              <span class="letra">{{ this.contadores[5].EnManteniment }}</span>
            </p> -->
          </div>
        </article>
      </router-link>
    </div>
    <div class="tile is-parent">
      <router-link
        :to="{ name: 'VistaListaEspecifica', params: { title: inventario[68].title } }"
        title="Selecció del material"
      >
        <article class="tile is-child box">
          <p class="title"><img :src="inventario[68].image" width="100" /></p>
          <p class="subtitle">
            <strong class="subtitle2">{{ inventario[68].title }}</strong>
          </p>
          <div class="content">
            <p>
              <table>
                <tr> 
                  <td><strong>Total Unitats </strong></td>
                  <td class="letraTotal">{{ this.contadores[6].TotalUnitats }}</td>
                </tr>
              </table> 
              <table>
                <tr>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material Disponible">
                      <img src="../assets/ico/Disponible.png" width="30" class="left" />
              
                    </router-link></td>
                  <td> 
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material No Disponible">
                      <img src="../assets/ico/NoDisponible.png" width="30" class="left" />
                    </router-link>
                  </td>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material En Manteniment">
                      <img src="../assets/ico/Mantenimiento.png" width="30" class="left" />
                    </router-link></td>
                </tr>
                <tr>
                  <td>{{ this.contadores[6].Disponible }}</td>
                  <td>{{ this.contadores[6].NoDisponible }}</td>
                  <td>{{ this.contadores[6].EnManteniment }}</td>
                </tr>
              </table>            
            </p>
            <div id="graficos">
            <!-- <figure class="horizontal">100%</figure> -->
            <figure class="horizontal">100%</figure>
            </div>
            <!-- <p>
              <strong>Total Unitats: </strong
              ><span class="letra">{{ this.contadores[6].TotalUnitats }}</span
              ><br />
              <img src="../assets/ico/Disponible.png" width="20" class="left" />
              <strong> Disponibles: </strong>
              <span class="letra">{{ this.contadores[6].Disponible }}</span> <br />
              <img src="../assets/ico/NoDisponible.png" width="20" class="left" />
              <strong> No disponibles: </strong>
              <span class="letra"> {{ this.contadores[6].NoDisponible }} </span> <br />
              <img src="../assets/ico/Mantenimiento.png" width="20" class="left" />
              <strong> En Manteniment: </strong>
              <span class="letra">{{ this.contadores[6].EnManteniment }}</span>
            </p> -->
          </div>
        </article>
      </router-link>
    </div>
    <div class="tile is-parent">
      <router-link
        :to="{ name: 'VistaListaEspecifica', params: { title: inventario[71].title } }"
        title="Selecció del material"
      >
        <article class="tile is-child box">
          <p class="title"><img :src="inventario[71].image" width="100" /></p>
          <p class="subtitle">
            <strong class="subtitle2">{{ inventario[71].title }}</strong>
          </p>
          <div class="content">
            <p>
              <table>
                <tr> 
                  <td><strong>Total Unitats </strong></td>
                  <td class="letraTotal">{{ this.contadores[7].TotalUnitats }}</td>
                </tr>
              </table> 
              <table>
                <tr>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material Disponible">
                      <img src="../assets/ico/Disponible.png" width="30" class="left" />
              
                    </router-link></td>
                  <td> 
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material No Disponible">
                      <img src="../assets/ico/NoDisponible.png" width="30" class="left" />
                    </router-link>
                  </td>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material En Manteniment">
                      <img src="../assets/ico/Mantenimiento.png" width="30" class="left" />
                    </router-link></td>
                </tr>
                <tr>
                  <td>{{ this.contadores[7].Disponible }}</td>
                  <td>{{ this.contadores[7].NoDisponible }}</td>
                  <td>{{ this.contadores[7].EnManteniment }}</td>
                </tr>
              </table>            
            </p>
            <div id="graficos">
            <!-- <figure class="horizontal">100%</figure> -->
            <figure class="horizontal">30%</figure>
            </div>
            <!-- <p>
              <strong>Total Unitats: </strong
              ><span class="letra">{{ this.contadores[7].TotalUnitats }}</span> <br />
              <img src="../assets/ico/Disponible.png" width="20" class="left" />
              <strong> Disponibles: </strong>
              <span class="letra">{{ this.contadores[7].Disponible }}</span> <br />
              <img src="../assets/ico/NoDisponible.png" width="20" class="left" />
              <strong> No disponibles: </strong>
              <span class="letra"> {{ this.contadores[7].NoDisponible }} </span> <br />
              <img src="../assets/ico/Mantenimiento.png" width="20" class="left" />
              <strong> En Manteniment: </strong>
              <span class="letra">{{ this.contadores[7].EnManteniment }}</span>
            </p> -->
          </div>
        </article>
      </router-link>
    </div>
    <div class="tile is-parent">
      
        <article class="tile is-child box">
          <router-link
        :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].title } }"
        title="Selecció del material"
      >
          <p class="title"><img :src="inventario[77].image" width="100" /></p>
        
          <p class="subtitle">
            <strong class="subtitle2">{{ inventario[77].title }}</strong>
          </p>
        </router-link>
        <br/>
          <div class="content">
            <p>
              <table>
                <tr> 
                  <td><strong>Total Unitats </strong></td>
                  <td class="letraTotal">{{ this.contadores[8].TotalUnitats }}</td>
                </tr>
              </table> 
              <table>
                <tr>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material Disponible">
                      <img src="../assets/ico/Disponible.png" width="30" class="left" />
              
                    </router-link></td>
                  <td> 
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material No Disponible">
                      <img src="../assets/ico/NoDisponible.png" width="30" class="left" />
                    </router-link>
                  </td>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material En Manteniment">
                      <img src="../assets/ico/Mantenimiento.png" width="30" class="left" />
                    </router-link></td>
                </tr>
                <tr>
                  <td>{{ this.contadores[8].Disponible }}</td>
                  <td>{{ this.contadores[8].NoDisponible }}</td>
                  <td>{{ this.contadores[8].EnManteniment }}</td>
                </tr>
              </table>            
            
              <!-- <router-link
                :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                title="Material Disponible">
              <img src="../assets/ico/Disponible.png" width="20" class="left" />
              <strong> Disponibles: </strong>
              </router-link>
              <span class="letra">{{ this.contadores[8].Disponible }}</span> <br />
              <router-link
                :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                title="Material No Disponible">
              <img src="../assets/ico/NoDisponible.png" width="20" class="left" />
              <strong> No disponibles: </strong>
              </router-link>
              <span class="letra"> {{ this.contadores[8].NoDisponible }} </span> <br />
              <router-link
                :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                title="Material No Disponible">
              <img src="../assets/ico/Mantenimiento.png" width="20" class="left" />
              <strong> En Manteniment: </strong>
            </router-link>
              <span class="letra">{{ this.contadores[8].EnManteniment }}</span> -->
            </p>
            <div id="graficos">
            <!-- <figure class="horizontal">100%</figure> -->
            <figure class="horizontal">30%</figure>
            </div>
          </div>
        </article>
      
    </div>
    <div class="tile is-parent">
      <router-link
        :to="{ name: 'VistaListaEspecifica', params: { title: inventario[80].title } }"
        title="Selecció del material"
      >
        <article class="tile is-child box">
          <p class="title"><img :src="inventario[80].image" width="100" /></p>
          <p class="subtitle">
            <strong class="subtitle2">{{ inventario[80].title }}</strong>
          </p>
          <div class="content">
            <div>
              <table>
                <tr> 
                  <td><strong>Total Unitats </strong></td>
                  <td class="letraTotal">{{ this.contadores[9].TotalUnitats }}</td>
                </tr>
              </table> 
              <table>
                <tr>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material Disponible">
                      <img src="../assets/ico/Disponible.png" width="30" class="left" />
              
                    </router-link></td>
                  <td> 
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material No Disponible">
                      <img src="../assets/ico/NoDisponible.png" width="30" class="left" />
                    </router-link>
                  </td>
                  <td>
                    <router-link
                    :to="{ name: 'VistaListaEspecifica', params: { title: inventario[77].estado } }"
                    title="Material En Manteniment">
                      <img src="../assets/ico/Mantenimiento.png" width="30" class="left" />
                    </router-link></td>
                </tr>
                <tr>
                  <td>{{ this.contadores[9].Disponible }}</td>
                  <td>{{ this.contadores[9].NoDisponible }}</td>
                  <td>{{ this.contadores[9].EnManteniment }}</td>
                </tr>
              </table> 
              <div id="graficos">
            <!-- <figure class="horizontal">100%</figure> -->
            <figure class="horizontal">30%</figure>
            </div>
              </div>           
            <!-- <p>
              <strong>Total Unitats: </strong>
              <span class="letra">{{ this.contadores[9].TotalUnitats }}</span
              ><br />
              <img src="../assets/ico/Disponible.png" width="20" class="left" />
              <strong> Disponibles: </strong>
              <span class="letra">{{ this.contadores[9].Disponible }}</span> <br />
              <img src="../assets/ico/NoDisponible.png" width="20" class="left" />
              <strong> No disponibles: </strong>
              <span class="letra"> {{ this.contadores[9].NoDisponible }} </span> <br />
              <img src="../assets/ico/Mantenimiento.png" width="20" class="left" />
              <strong> En Manteniment: </strong>
              <span class="letra">{{ this.contadores[9].EnManteniment }}</span>
            </p> -->
          </div>
        </article>
      </router-link>
    </div>
  </div>
  <br />
  <br />
</template>

<script>
import Inventario from "../json/inventario.json";
export default {
  name: "Global-View",
  data() {
    return {
      inventario: Inventario.data,
      materiales: [],
      searchTerm: "",
      showModal: false,

      //0
      contadorTotales0: 0,
      contadorDisponible0: 0,
      contadorNoDisponible0: 0,
      contadorEnManteniment0: 0,
      //1
      contadorTotales1: 0,
      contadorDisponible1: 0,
      contadorNoDisponible1: 0,
      contadorEnManteniment1: 0,
      //2
      contadorTotales2: 0,
      contadorDisponible2: 0,
      contadorNoDisponible2: 0,
      contadorEnManteniment2: 0,
      //3
      contadorTotales3: 0,
      contadorDisponible3: 0,
      contadorNoDisponible3: 0,
      contadorEnManteniment3: 0,
      //4
      contadorTotales4: 0,
      contadorDisponible4: 0,
      contadorNoDisponible4: 0,
      contadorEnManteniment4: 0,
      //5
      contadorTotales5: 0,
      contadorDisponible5: 0,
      contadorNoDisponible5: 0,
      contadorEnManteniment5: 0,
      //6
      contadorTotales6: 0,
      contadorDisponible6: 0,
      contadorNoDisponible6: 0,
      contadorEnManteniment6: 0,
      //7
      contadorTotales7: 0,
      contadorDisponible7: 0,
      contadorNoDisponible7: 0,
      contadorEnManteniment7: 0,
      //8
      contadorTotales8: 0,
      contadorDisponible8: 0,
      contadorNoDisponible8: 0,
      contadorEnManteniment8: 0,
      //9
      contadorTotales9: 0,
      contadorDisponible9: 0,
      contadorNoDisponible9: 0,
      contadorEnManteniment9: 0,

      contadores: [
        {
          title: "Bomba FreeGo Abbott",
          TotalUnitats: 0,
          Disponible: 0,
          NoDispobible: 0,
          EnManteniment: 0,
        },
        {
          title: "Bis Aspect Medical Systems",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Bomba Volumétrica Alaris",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Bomba Volumétrica de jeringa Alaris",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Calentador de infusión HOTLINE®",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Calentador de insfusión 3M",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Airvo 2 Sistema de alto flujo nasal",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Respirador HAMILTON‑C6",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Calefactor Coviden WarmTouch™ 6000",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Calefactor Coviden WarmTouch™ 6000",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Vivano TPN para aplicación de TPNT",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
      ],
    };
  },
  mounted() {
    this.fetchItems();
    localStorage.setItem("materiales", JSON.stringify(this.inventario));
    this.contadoresIndividuales();
    function ajusta() {
    var horizontales = document.querySelectorAll("#graficos .horizontal"); 
    var arcos = document.querySelectorAll("#graficos .arco"); 
    var torres = document.querySelectorAll("#graficos #vertical .torre"); 

var elem = 0; 
while(elem < horizontales.length) {
horizontales[elem].style.transition = "background-size 3s ease-in-out 2s"; 
horizontales[elem].style.backgroundSize = horizontales[elem].innerHTML+" 100%"; 
elem++; 
} 

elem = 0; 
while(elem<torres.length) {
torres[elem].style.transition = "background-size 1s ease-out "+(elem+4)+"s"; 
torres[elem].style.backgroundSize = "80% "+ torres[elem].innerHTML; 
elem++; 
}

elem = 0; 
while(elem<arcos.length) {
arcos[elem].style.backgroundImage = "radial-gradient(circle at bottom, white 45%, transparent 47%, transparent 67%, white 70%), linear-gradient("
+ (parseInt(arcos[elem].innerHTML) / 100) * 180 +
"deg, green 50%, transparent 50%)"; 
elem++; 
}

}

onload = ajusta; 
  },
  computed: {},
  methods: {
    setSearchTerm(searchTerm) {
      console.log(searchTerm);
      this.searchTerm = searchTerm;
    },
    fetchItems() {
      this.materiales = Inventario.data;
    },
    contadoresIndividuales() {
      
      this.contadorTotales = 0;
      
      for (let i = 0; i < this.materiales.length; i++) {
        switch (this.materiales[i].title) {
          case "Bomba FreeGo Abbott":
            this.contadorTotales0++;
            this.contadores[0].TotalUnitats = this.contadorTotales0;
            switch (this.materiales[i].estado) {
              case "Disponible":
                this.contadorDisponible0++;
                this.contadores[0].Disponible = this.contadorDisponible0;
                break;
              case "No Disponible":
                this.contadorNoDisponible0++;
                this.contadores[0].NoDisponible = this.contadorNoDisponible0;
                break;
              case "En Manteniment":
                this.contadorEnManteniment0++;
                this.contadores[0].EnManteniment = this.contadorEnManteniment0;
                break;
            }
            break;

          case "Bis Aspect Medical Systems":
            this.contadorTotales1++;
            this.contadores[1].TotalUnitats = this.contadorTotales1;
            switch (this.materiales[i].estado) {
              case "Disponible":
                this.contadorDisponible1++;
                this.contadores[1].Disponible = this.contadorDisponible1;
                break;
              case "No Disponible":
                this.contadorNoDisponible1++;
                this.contadores[1].NoDisponible = this.contadorNoDisponible1;
                break;
              case "En Manteniment":
                this.contadorEnManteniment1++;
                this.contadores[1].EnManteniment = this.contadorEnManteniment1;
                break;
            }
            break;

          case "Bomba Volumétrica Alaris":
            this.contadorTotales2++;
            this.contadores[2].TotalUnitats = this.contadorTotales2;
            switch (this.materiales[i].estado) {
              case "Disponible":
                this.contadorDisponible2++;
                this.contadores[2].Disponible = this.contadorDisponible2;
                break;
              case "No Disponible":
                this.contadorNoDisponible2++;
                this.contadores[2].NoDisponible = this.contadorNoDisponible2;
                break;
              case "En Manteniment":
                this.contadorEnManteniment2++;
                this.contadores[2].EnManteniment = this.contadorEnManteniment2;
                break;
            }
            break;

          case "Bomba Volumétrica de jeringa Alaris":
            this.contadorTotales3++;
            this.contadores[3].TotalUnitats = this.contadorTotales3;
            switch (this.materiales[i].estado) {
              case "Disponible":
                this.contadorDisponible3++;
                this.contadores[3].Disponible = this.contadorDisponible3;
                break;
              case "No Disponible":
                this.contadorNoDisponible3++;
                this.contadores[3].NoDisponible = this.contadorNoDisponible3;
                break;
              case "En Manteniment":
                this.contadorEnManteniment3++;
                this.contadores[3].EnManteniment = this.contadorEnManteniment3;
                break;
            }
            break;

          case "Calentador de infusión HOTLINE®":
            this.contadorTotales4++;
            this.contadores[4].TotalUnitats = this.contadorTotales4;
            switch (this.materiales[i].estado) {
              case "Disponible":
                this.contadorDisponible4++;
                this.contadores[4].Disponible = this.contadorDisponible4;
                break;
              case "No Disponible":
                this.contadorNoDisponible4++;
                this.contadores[4].NoDisponible = this.contadorNoDisponible4;
                break;
              case "En Manteniment":
                this.contadorEnManteniment4++;
                this.contadores[4].EnManteniment = this.contadorEnManteniment4;
                break;
            }
            break;

          case "Calentador de insfusión 3M":
            this.contadorTotales5++;
            this.contadores[5].TotalUnitats = this.contadorTotales5;
            switch (this.materiales[i].estado) {
              case "Disponible":
                this.contadorDisponible5++;
                this.contadores[5].Disponible = this.contadorDisponible5;
                break;
              case "No Disponible":
                this.contadorNoDisponible5++;
                this.contadores[5].NoDisponible = this.contadorNoDisponible5;
                break;
              case "En Manteniment":
                this.contadorEnManteniment5++;
                this.contadores[5].EnManteniment = this.contadorEnManteniment5;
                break;
            }
            break;

          case "Airvo 2 Sistema de alto flujo nasal":
            this.contadorTotales6++;
            this.contadores[6].TotalUnitats = this.contadorTotales6;
            switch (this.materiales[i].estado) {
              case "Disponible":
                this.contadorDisponible6++;
                this.contadores[6].Disponible = this.contadorDisponible6;
                break;
              case "No Disponible":
                this.contadorNoDisponible6++;
                this.contadores[6].NoDisponible = this.contadorNoDisponible6;
                break;
              case "En Manteniment":
                this.contadorEnManteniment6++;
                this.contadores[6].EnManteniment = this.contadorEnManteniment6;
                break;
            }
            break;

          case "Respirador HAMILTON‑C6":
            this.contadorTotales7++;
            this.contadores[7].TotalUnitats = this.contadorTotales7;
            switch (this.materiales[i].estado) {
              case "Disponible":
                this.contadorDisponible7++;
                this.contadores[7].Disponible = this.contadorDisponible7;
                break;
              case "No Disponible":
                this.contadorNoDisponible7++;
                this.contadores[7].NoDisponible = this.contadorNoDisponible7;
                break;
              case "En Manteniment":
                this.contadorEnManteniment7++;
                this.contadores[7].EnManteniment = this.contadorEnManteniment7;
                break;
            }
            break;

          case "Calefactor Coviden WarmTouch™ 6000":
            this.contadorTotales8++;
            this.contadores[8].TotalUnitats = this.contadorTotales8;
            switch (this.materiales[i].estado) {
              case "Disponible":
                this.contadorDisponible8++;
                this.contadores[8].Disponible = this.contadorDisponible8;
                break;
              case "No Disponible":
                this.contadorNoDisponible8++;
                this.contadores[8].NoDisponible = this.contadorNoDisponible8;
                break;
              case "En Manteniment":
                this.contadorEnManteniment8++;
                this.contadores[8].EnManteniment = this.contadorEnManteniment8;
                break;
            }
            break;

          case "Vivano TPN para aplicación de TPNT":
            this.contadorTotales9++;
            this.contadores[9].TotalUnitats = this.contadorTotales9;
            switch (this.materiales[i].estado) {
              case "Disponible":
                this.contadorDisponible9++;
                this.contadores[9].Disponible = this.contadorDisponible9;
                break;
              case "No Disponible":
                this.contadorNoDisponible9++;
                this.contadores[9].NoDisponible = this.contadorNoDisponible9;
                break;
              case "En Manteniment":
                this.contadorEnManteniment9++;
                this.contadores[9].EnManteniment = this.contadorEnManteniment9;
                break;
            }
            break;
        }

        //console.log(this.contadores[0].Disponible)
        //console.log(this.contadores[1].TotalUnitats);
        //console.log(this.contadores[1].Disponible);
        //console.log(this.contadores[1].NoDisponible);
        //console.log(this.contadores[1].EnManteniment);
      }
      this.contadorDisponible = 0;
      this.contadorNoDisponible = 0;
      this.contadorEnManteniment = 0;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

.subtitle2 {
  font-size: 16px;
  font-weight: bold;
}
.router-link:hover {
  background-color: #3e8e41;
}

.left {
  margin-left: -5px;
}
.letra {
  font-size: 16px;
  font-weight: bolder;
}
.letraRow {
  font-size: 15px;
}
.letraTotal {
  font-size: 26px;
  text-align: center;
}
td {
  font-size: 18px;
}
table{
text-align:center;
}
#graficos {
display:contents; 
margin: .5em auto; 
padding: 0 .5em .5em; 
border: .15em solid black; 
font: 900 2em/1.2 sans-serif; 
float: left; 
border-radius: .25em; 
}

#graficos .horizontal {
display: block; 
font: 900 .5em/1 monospace; 
text-align: left; 
margin: .2em 0; 
width: 10em; height: 1em; 
background-color: gainsboro; 
padding: 0; 
border-right: solid 2.5em transparent; /* truco para compensar bg-position */
background-image: linear-gradient(rgb(198, 212, 250), rgb(0, 60, 255)); 
background-repeat: no-repeat; 
background-position: 2.5em 0; 
background-size: 0 100%; 
}
#graficos .arco {
display: block; 
font: 900 .8em/6em serif; 
text-align: center; 
margin: .2em auto; 
width: 8em; height: 4em; 
background-color: gainsboro; 
padding: 0; 
background-repeat: no-repeat; 
background-position: 0 0; 
background-size: 100% 100%, 100% 200%; 
}


</style>

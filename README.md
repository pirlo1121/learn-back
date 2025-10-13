#  Guía estructurada de Express — CRUD y arquitectura

Repositorio organizado en capítulos para entender **la estructura de un backend con Express**

---

##  Orden de lectura ( readme => 0-1 - 0-6 )

# CONTENIDO 
| `01-introduccion` | 

Instalación, primer servidor y explicación del flujo básico de Express. |


| `02-estructura-proyecto` | 

Organización de archivos: `routes`, `controllers`, `models` y orden lógico del proyecto. |

| `03-mongo-conexion` | 

Conexión a MongoDB con Mongoose  |

| `04-model` | 

Modelo y Schema y explicación del modelo de datos. |

| `05-routes` | 

Implementación del CRUD paso a paso: creación, lectura, actualización y eliminación de datos. |

| `06-crud` | 

Implementación del CRUD paso a paso: creación, lectura, actualización y eliminación de datos. |

| `07-middlewares` | 

Validaciones, manejo de errores y flujo de petición-respuesta. |



Cada carpeta contiene su propio `README.md` explicando **qué hace cada archivo** y **cómo se conecta con el resto del sistema**.

---

##  Estructura mental recomendada

1. **Servidor recibe una petición.**
2. **Router decide qué controlador responde.**
3. **Controlador ejecuta lógica o llama a un servicio/modelo.**
4. **(Opcional) Middleware interviene antes o después del controlador.**
5. **Se envía una respuesta al cliente.**

---

##  Requisitos técnicos

- Node.js instalado.
- MongoDB local o en la nube (Mongo Atlas).
- Postman o cliente similar para pruebas.


*pasar a 01-introduccion.md*

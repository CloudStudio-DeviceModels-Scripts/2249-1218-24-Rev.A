function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  
  endpoints.addEndpoint("1", "Temperatura Acumulador ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Temperatura Retorno ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "Temperatura Agua Fría", endpointType.temperatureSensor);
  endpoints.addEndpoint("4", "Temperatura Ambiente", endpointType.temperatureSensor);
  endpoints.addEndpoint("5", "Temperatura Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("6", "Temperatura Acumulador Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("7", "Temperatura Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("8", "Consigna ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("9", "Consigna Caldera", endpointType.temperatureSensor);
  var s1 = endpoints.addEndpoint("10", "MP B.Retorno ACS", endpointType.genericSensor);
  s1.variableTypeId = 1316;
  
  // Con esto podemos hacer un on-off //endpoints.addEndpoint("11", "MP B.Caldera", endpointType.appliance, applianceEndpointSubType.pump);
   var s2 = endpoints.addEndpoint("12", "MP B.Legionella", endpointType.genericSensor); 
   s2.variableTypeId = 1316;
   var s3 = endpoints.addEndpoint("13", "MP B.Primario Solar", endpointType.genericSensor);
   s3.variableTypeId = 1316;
   var s4 = endpoints.addEndpoint("14", "MP B.Primario ACS", endpointType.genericSensor);
   s4.variableTypeId = 1316;
   var s5 = endpoints.addEndpoint("15", "Alarma exceso temp.Solar", endpointType.genericSensor);
   s5.variableTypeId = 1317;
   var s6 = endpoints.addEndpoint("16", "Alarma presion caldera baja", endpointType.genericSensor);
   s6.variableTypeId = 1317;
   var s7 = endpoints.addEndpoint("17", "Alarma fallo caldera", endpointType.genericSensor);
   s7.variableTypeId = 1317;
   var s8 = endpoints.addEndpoint("18", "Alarma fallo termico 1", endpointType.genericSensor);
   s8.variableTypeId = 1317;
   var s9 = endpoints.addEndpoint("19", "Alarma fallo termico 2", endpointType.genericSensor);
   s9.variableTypeId = 1317;
   var s10 = endpoints.addEndpoint("20", "Alarma control cloro alto", endpointType.genericSensor);
   s10.variableTypeId = 1317;
   var s11 = endpoints.addEndpoint("21", "Alarma control cloro bajo", endpointType.genericSensor);
   s11.variableTypeId = 1317;
   var s12 = endpoints.addEndpoint("22", "Alarma disparo seta", endpointType.genericSensor);
   s12.variableTypeId = 1317; 
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}
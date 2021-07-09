//delete employee data

window.addEventListener("load", function(){
    //点击delete链接并删除table data
    //获取每一个链接
    const all = document.getElementsByTagName("a");
    for(let i=0; i < all.length; i++){
        all[i].addEventListener('click', function(){
            //删除时从parent node开始删除: <a>父节点<td>,<td>的父节点<tr>
            const tr = this.parentNode.parentNode;
            const flag = confirm("confirm to delete");
            if(flag){
                tr.parentNode.removeChild(tr);
            }
            //链接默认行为是跳转，设置为不跳转
            //return false;// default is flase = not moves to page
        })
    }

//add employee information
const submit = document.getElementById("addEmpButton");
    submit.addEventListener("click", function(){
    
        //获取员工输入信息
        const name = document.getElementById("empName");
        const email = document.getElementById("email");
        const salary = document.getElementById("salary");

        /**
         * <tr>
            <td>Bob</td>
            <td>bob@gmail.com</td>
            <td>10000</td>   
            <td><a href="####">Delete</a></td>
        </tr>
         */

        //创建<tr>
        const tr = document.createElement("tr");
        //创建4个<td>
        const nameTd = document.createElement("td");
        const emailTd = document.createElement("td");
        const salaryTd = document.createElement("td");
        const aTd = document.createElement("td");

        //创建一个a元素
        const a = document.createElement("a");

        //添加文本到td
        nameTd.innerHTML = name.value;
        emailTd.innerHTML = email.value;
        salaryTd.innerHTML= salary.value;
        
        //向a添加文本
        aTd.innerHTML = "Delete";
        
        //将a添加到td中
        aTd.appendChild(a);

        //将td添加到tr中
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(salaryTd);
        tr.appendChild(aTd);

        //向a中添加href属性，链接
        a.href = "javascript";

        //获取table
        const employeeTable = document.getElementById("employeeTable");

        //获取table中的tbody
        const tbody = employeeTable.getElementsByTagName("tbody")[0];
        //将tr添加到tbody中
        tbody.appendChild(tr);
    })

})



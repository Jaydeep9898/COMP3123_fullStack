const os = require('os');
module.exports ={

    getSysteminfo:function(){
        return "Operating System Info: "+
        "\nCPU Architecture: " + os.arch()+
        "\nHost Name: "+os.hostname()+
        "\nOS Name: "+os.type();
    },

    getUserInfo:function(){
        return "UserInfo: User name: "+os.userInfo().username+ 
        "\nHome Directory: "+os.homedir();
    }

}
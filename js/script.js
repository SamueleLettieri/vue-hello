const app = new Vue(
    {
        el: "#root",
        data: {
            newImg: "",
            imgSrc: "",
        },
         
        methods: {
            updateImg: function () {
                this.imgSrc = this.newImg;
                return;
            }
        },
    }
);


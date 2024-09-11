<template>
    <div class="top_nav_main">
        <div class="top_login">
            <div class="top_left">GUANGDONG JIAHUI HOME DESIGN CO., LTD</div>
            <div class="top_right">Log In / Sign Up</div>
        </div>
        <div class="bottom_bg">
            <div class="bottom_main">
                <div class="logo">
                    <img src="../assets//img/public/logo.png">
                </div>
                <div class="nav">
                    <div class="item">
                        <a-dropdown class="item_nav">
                            <a-button  @click.prevent>
                                HOME
                            </a-button>
                        </a-dropdown>
                    </div>
                    <div class="item">
                        <a-dropdown class="item_nav">
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>About us</a-menu-item>
                                        <a-menu-item>F.A.Q</a-menu-item>
                                        <a-menu-item>Event</a-menu-item>
                                        <a-menu-item>History of</a-menu-item>
                                        <a-menu-item>developemnt<br/>Our products</a-menu-item>
                                    </a-menu>
                                </template>
                                <a-button @click.prevent>
                                    ABOUT US<CaretDownOutlined />
                                </a-button>
                        </a-dropdown>
                    </div>
                    <div class="item">
                        <a-dropdown class="item_nav">
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>All products</a-menu-item>
                                        <a-menu-item>Cut flowrs and<br/>Branches</a-menu-item>
                                        <a-menu-item>Potted plants</a-menu-item>
                                        <a-menu-item>Spice</a-menu-item>
                                        <a-menu-item>Trees</a-menu-item>
                                        <a-menu-item>Seasonal items</a-menu-item>
                                        <a-menu-item>Ornaments</a-menu-item>
                                    </a-menu>
                                </template>
                                <a-button @click.prevent>
                                    ASSORTMENT<CaretDownOutlined />
                                </a-button>
                        </a-dropdown>
                    </div>
                    <div class="item">
                        <a-dropdown class="item_nav">
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>Story</a-menu-item>
                                        <a-menu-item>Inspiration</a-menu-item>
                                        <a-menu-item>Catalogues</a-menu-item>
                                    </a-menu>
                                </template>
                                <a-button @click.prevent>
                                    STORY<CaretDownOutlined />
                                </a-button>
                        </a-dropdown>
                    </div>
                    <div class="item">
                        <a-dropdown class="item_nav">
                            <a-button  @click.prevent>
                                CONTACT
                            </a-button>
                        </a-dropdown>
                    </div>
                </div>
                <div class="btns">
                    <div class="item" style="margin-right: 15px">
                        <SearchOutlined />
                    </div>
                    <div class="item">
                        <UserOutlined />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { CaretDownOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons-vue';
</script>

<style lang="less" scoped>
.top_nav_main {
    width: 100%;
    min-width: 1280px;
    .top_login {
        background-color: #F8F7F8;
        font-size: 14px;
        color: #8B8B8C;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 15px;
        .top_right {
            color: #696665;
        }
    }
    .bottom_bg {
        min-width: 1280px;
        background-color: #208D7B;
        display: flex;
        align-items: center;
        justify-content: center;
        .bottom_main {
            width: 70%;
            min-width: 1280px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo {
                width: 85px;
                font-size: 0px;
            }
            .nav {
                display: flex;
                align-items: center;
                .item {
                    color: #fff;
                    cursor: pointer;
                    button {
                        font-size: 16px !important;
                        height: 85px;
                        background-color: #208D7B;
                        color: #fff;
                        border: none;
                        border-radius: 0px;
                        display: flex;
                        align-items: center;
                        &:hover {
                            background-color: #57B8A8;
                        }
                    }
                    
                    .ant-dropdown-link {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        .anticon {
                            margin-left: 10px;
                        }
                    }
                }
            }
            .btns {
                display: flex;
                color: #fff;
                cursor: pointer;
            }
        }
    }
}

</style>

<style lang="less">
.ant-dropdown {
    top: 126px !important;
    left: auto;
    .ant-dropdown-menu {
        background-color: RGBA(32, 141, 123, 0.7);
        border-radius: 0px;
        .ant-dropdown-menu-title-content {
            color: #fff;
        }
    }
}
</style>
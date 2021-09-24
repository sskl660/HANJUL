package com.hanzul_v2.config;


import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Configuration
public class SwaggerConfig {
    private String version = "v2";
    private String pathUri = "/hanjul/**";
    private String title = "Hanjul_REST API";
    private String description = "Hanjul_REST API Docs";
    private String basePackage = "com.hanjul.api";

//    @Bean
//    public Docket api(){
//        return new Docket(DocumentationType.SWAGGER_2)
//                .select()
//                .apis(RequestHandlerSelectors.basePackage(basePackage))
//                .paths(PathSelectors.ant("/hanjul/**"))
//                .build()
//                .apiInfo(apiInfo()) .enable(true);
//    }
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title(title)
                .description(description)
                .version(version)
                .build();
    }
}
